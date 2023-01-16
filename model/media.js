const { default: mongoose } = require("mongoose");


const mediaSchema=mongoose.Schema({
    name:String,
    email:String,
    gender:String,
    password:String
})

const media=mongoose.model("media",mediaSchema);

module.exports={media}