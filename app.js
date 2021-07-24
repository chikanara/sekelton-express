const express = require("express")
const app = express()


const logger = (req,res,next) => {
    console.table({"url":req.url,"method":req.method})
    next()
}

app.use(logger)
app.use(express.json())
let users = [
    {
        name:"John Doe",
        email:"john@gmail.com",
        id:0
    },
    {
        name:"marco",
        email:"marco@gmail.com",
        id:1
    }
]
// get all users
app.get("/users",(req,res) =>{
    res.status(200).send(users)
})
// add new user
app.post("/add_user",(req,res) => {
    const newUser = req.body
    newUser.id=Date.now()
    users=[...users,newUser]
    res.send({msg:"user added",users})
})
//edit user 
app.put("/edit_user/:userId",(req,res) => {
    const id = req.params.userId
    const modification = req.body
    console.log(id)
    console.log(modification)
    if(!users.find(user => user.id == id)){
        return res.status(404).send("user not found")
    }
    users=users.map(user => user.id == id ? {...user,...modification} : user)
    res.send({msg:"user edited",users})
})
// delete user
app.delete("/users/:userId",(req,res) => {
    const id = req.params.userId
    if(!users.find(user => user.id == id)){
        return res.status(404).send("user not found")
    }
    users = users.filter(user => user.id != id)
    res.send({msg:"user deleted",users})
})
//start server 
const PORT=5000;
app.listen(5000,()=>console.log("the server is running on port "+PORT))