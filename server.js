const express = require("express")
const app = express()

// console.log(app)
// app.get("/",(req,res)=>{
//     res.send("hello world")
// })

// app.get("/",(req,res) => {
//     console.log("url",req.url)
//     console.log("method",req.method)
//     res.send("<h1 style='color:red'>Home page</h1>")
// })
// app.get("/services",(req,res) => {
//     console.log("url",req.url)
//     console.log("method",req.method)
//     res.send("<h1 style='color:red'>Services page</h1>")
// })
const logger = (req,res,next) => {
    console.table({"url":req.url,"method":req.method})
    next()
}


app.use(logger)
app.use(express.static("public"))
// server css
// app.get("/css/style.css",(req,res) => {
//     // console.log("url",req.url)
//     // console.log("method",req.method)
//     res.sendFile(__dirname+"/public/css/style.css")
// })
// app.get("/",(req,res) => {
//     // console.log("url",req.url)
//     // console.log("method",req.method)
//     res.sendFile(__dirname+"/public/index.html")
// })
// app.get("/services",(req,res) => {
//     // console.log("url",req.url)
//     // console.log("method",req.method)
//     res.sendFile(__dirname+"/public/services.html")
// })

//start server 
const PORT=5000;
app.listen(5000,()=>console.log("the server is running on port "+PORT))