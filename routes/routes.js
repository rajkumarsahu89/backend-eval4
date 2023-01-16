const express=require("express");
const bcrypt=require("bcrypt");
const {media}=require("../model/media");



const router=express.Router();

router.post("/register",(res,req)=>{
    const{name,email,gender,password}=req.body;
    bcrypt.hash(password,5,(err,secured_password)=>{
        if(err){
            console.log(err);
        } else {
            try{
                const userData=media({
                    name,
                    email,
                    gender,
                    password:secured_password,
                });
                userData.save();
                console.log("Sucess");
                res.json(userData);
            } catch(error){
                console.log(error);
                res.json(error);
            }
        }
    });
});

module.exports=router
