const axios=require("axios")
function homeroutes(app){

    app.get("/",(req,res)=>{
      let isActive=true

      const users=[
        {
          id:1,
          name:"felipe",
          apellido:"segura"


        },
        {
          id:2,
          name:"yoan",
          apellido:"segura"
        }
    ]

      
        
        res.render("index",{
            title:"mi pagina creada desde express",
            isActive,
            users
        })
      })
      app.get("/about",(req,res)=>{
        
        res.render("index",{
            title:"about"
        })
      })
app.get("/dashboard",(req,res)=>{
   
    res.render("dashboard",{
      title:"dashboard"
    })
  })

  app.get("/posts",async(req,res)=>{
        

   const response= await axios.get("https://jsonplaceholder.typicode.com/posts")
    res.render("posts",{
      post:response.data,
      
    })
  })
}

module.exports=homeroutes;