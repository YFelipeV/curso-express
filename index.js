// const http=require("http");
// const fs=require("fs")

//  const server = http.createServer((req,res)=>{
//   const read=fs.createReadStream("./static/index.html")
//   read.pipe(res)
// })

// server.listen(4000)
// console.log(`server on port ${4000}`)

const express = require("express");
const morgan= require("morgan")
const path=require("path")
const user=require("./src/routes/index")
const index=require("./src/routes/user")
 require("ejs")
 const connectDB=require("./src/db")


const app = express();

connectDB()
// //este es para una funcion antes de que vaya a la ruta , el next es para continuar con las rutas
// app.use((req,res,next)=>{
//   console.log(`ruta ${req.url} metodo: ${req.method}`)
// console.log("paso por aqui")
// next()
// })


//setting
app.set("nombreAplicacion","express course")
app.set("port",4000)
app.set("view engine","ejs")
app.set("views",path.join(__dirname,"./src/views"))
app.get("/profile",(req,res)=>{
  res.send("profile page")
})
//middlewares
app.use(morgan("dev"))
app.get("/note.txt",(req,res)=>{
  res.send("esto no es un archivo")
})

app.use(index)
user(app)

// app.use((req,res,next)=>{
//   if(req.query.login === "felipesegura"){

//     next()
//   }else{
//     res.send("no autorizado")
//   }
// })


//rutas





/*
//el all sirve para todas get put delete post
app.all("/info", (req,res)=>{
  console.log(req.body)
  res.send("server info")
})

app.get("/search",(req,res)=>{
  if(req.query.q === "js"){
    res.send("lista de libros javascript")
  }
  else{
    res.send("pagina normal")
  }
})

app.get("/", (req, res) => {
  console.log(req.query.name)
  res.send("hello world!");
});
app.get("/about/:x/:y",(req,res)=>{
 const {x ,y}=req.params;
 res.send(`la suma es ${parseInt(x) +parseInt(y)}`)
})

esto es para las rutas que no sencuentrasn siempre va en la ultima
app.use((req,res)=>{
  res.send("not found")
})
*/



app.use("/public",express.static(path.join(__dirname,"./src/public")))
app.use("/uploads",express.static("./uploads"))
app.listen(app.get("port"));
console.log(`server ${app.get("nombreAplicacion")} on port ${app.get("port")}`);
