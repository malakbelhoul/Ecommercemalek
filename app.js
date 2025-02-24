const express=require('express') 
const mongoose=require('mongoose') 
const dotenv=require('dotenv')

const app=express()
const CategorieRouter =require("./routes/categorie.route")
const ScategorieRouter =require("./routes/scategorie.route")
const articleRouter =require("./routes/article.route")
app.use(express.json())
dotenv.config()

app.get('/',(req,res) =>{
    res.send("wooooooooooohooooooooo")
})

mongoose.connect(process.env.DATABASE)
.then(()=>{console.log("connexion a la base de donnees est reussie")})
.catch((error)=>{console.log("imposible de connecte a la base de donnee",error)
    process.exit()
})
app.use('/api/categories',CategorieRouter)
app.use('/api/scategories',ScategorieRouter)
app.use('/api/articles', articleRouter);
app.listen(process.env.PORT,function(){
    console.log("server is listen on port 4000")
})
