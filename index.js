require("dotenv").config();


const express =require("express");
const {connection}=require("./config/db");
const {router}=require("./routes/routes")

const app=express();
app.use(express.json());
app.use("/",router);


app.get("/",(req,res)=>{
    res.send("Hello")
});



app.listen(4400,async()=>{
    try{
        await connection;
        console.log("connected to mongoDB");
    }catch (error){
        console.log(error);
        console.log("connection to DB failed")
    }
    console.log(`server is running on port 4400`)
});
