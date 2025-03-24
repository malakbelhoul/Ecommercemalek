const express=require('express') 
const mongoose=require('mongoose') 
const dotenv=require('dotenv')
const cors=require('cors')
const app=express()
const CategorieRouter =require("./routes/categorie.route")
const ScategorieRouter =require("./routes/scategorie.route")
const articleRouter =require("./routes/article.route")
const userRouter =require("./routes/user.route")
const chatbotRequeteRouter = require("./routes/chatbot-requetes.root")
const paymentRouter =require("./routes/payment.route.js");
const path = require('path');
app.use(express.json())
app.use(cors())
dotenv.config()
/*
app.get("/",(req,res)=>{
res.send("page accueil")
})
*/

app.get('/',(req,res) =>{
    res.send("bd")
})

mongoose.connect(process.env.DATABASECLOUD)
.then(()=>{console.log("connexion a la base de donnees est reussie")})
.catch((error)=>{console.log("imposible de connecte a la base de donnee",error)
    process.exit()
})
app.use('/api/categories',CategorieRouter)
app.use('/api/scategories',ScategorieRouter)
app.use('/api/articles', articleRouter);
app.use('/api/users',userRouter)
app.use('/api/chatbot', chatbotRequeteRouter);
app.use('/api/payment', paymentRouter);
//dist reactjs
app.use(express.static(path.join(__dirname, './client/build'))); // Route pour les pages non trouvées, redirige vers index.html
app.get('*', (req, res) => { res.sendFile(path.join(__dirname,
'./client/build/index.html')); });
app.listen(process.env.PORT,function(){
    console.log("server is listen on port 4000")
})
module.exports = app;
