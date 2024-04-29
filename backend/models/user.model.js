const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fullName:{
        type:String,
        required:true
    },
    username:{
        type:String,
        unique:true,
        required:true
    },
    mobile:{
        type:Number,
        required:true,
        minlength:10
    },
    password:{
        type:String,
        required:true,
        minlength:6
    },
    gender:{
        type:String,
        required:true,
        enum:["male","female"]
    },
    profilePic:{
        type:String,
        default:""

    }
}, {timestamps : true});


const User = mongoose.model("User", userSchema);

module.exports = User;