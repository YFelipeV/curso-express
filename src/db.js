const mysql2= require("mysql2/promise")


async function  connectDB(){
 const connection=await mysql2.createConnection({
    host:"us-east.connect.psdb.cloud",
    user:"0a3tbrr8aw90ybq5rg2m",
    password:"pscale_pw_zylFIYxwo5E624kEjrb4XMHhRZVgvyukyUDxIf3b6HN",
    database:"expressdb",
    ssl:{
        rejectUnauthorized:false
    }

})
const result=await connection.query("SELECT 1 + 1 AS Result")
console.log(result)
}

module.exports=connectDB

