const express=require('express')
const app=express();
const userModel = require('./usermodel');

app.get('/create', async (req,res) =>{
    let createuser = await userModel.create({
        name: "shobhit",
        email:"shobhitsinghsingh@gmail.com",
        username:"shobhit26"
    })
    res.send(createuser);
})
app.get('/read', async (req,res) =>{
    let users = await userModel.find();
    res.send(users);
})
app.get('/',(req,res)=>{
    res.send("hye")
});
app.listen(3000,()=>{
    console.log("DONE");
})
