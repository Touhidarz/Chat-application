const bcrypt = require('bcryptjs');
const User = require("../models/user.model.js");
const generateTokenAndSetCookie = require('../utils/generateToken.js');

const signup = async(req, res) => {
    try {
        const {fullName, username, mobile, password, confirmPassword, gender} = req.body;

        // check for both the password input
        if(password !== confirmPassword){
            return res.status(400).json({error:'Password do not Match !!'})
        }

        // check if user already exists
        const user = await User.findOne({username});

        if(user){
            return res.status(400).json({error:'UserName  Already exists'})
        }

        //password hash here
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        //avatar for profile pics
        const boyProfilePic = `http://avatar.iran.liara.run/public/boy?username=${username}`
        const girlProfilePic = `http://avatar.iran.liara.run/public/girl?username=${username}`

        //created new user
        const newUser = new User({
            fullName,
            username,
            mobile,
            password : hashedPassword ,
            gender,
            profilePic : gender === "male" ? boyProfilePic : girlProfilePic
        })
        
        if(newUser){
            //generate JWT token here
            generateTokenAndSetCookie(newUser._id, res);
            await newUser.save();

            res.status(201).json({
                _id: newUser._id,
                fullName : newUser.fullName,
                username : newUser.username,
                mobile : newUser.mobile,
                profilePic : newUser.profilePic
        })
    }
    else{
        res.status(400).json({error : 'Invalid user Data'});
    }

    } catch (error) {
        console.log("Error in signup controller", error.message)
        res.status(500).json({error:"Internal Server Error"})
    }
};

const login = async (req, res) => {
    
    try {
        const { username, mobile, password } = req.body;
        const user = await User.findOne({ $or: [{ username }, { mobile }] });
    
        if (!user) {
            return res.status(400).json({ error: "Invalid username or mobile number" });
        }
    
        const isPasswordCorrect = await bcrypt.compare(password, user?.password || "");
    
        if (!isPasswordCorrect) {
            return res.status(400).json({ error: "Invalid password" });
        }
    
        generateTokenAndSetCookie(user._id, res);
    
        res.status(200).json({
            _id: user._id,
            fullName: user.fullName,
            username: user.username,
            mobile: user.mobile,
            profilePic: user.profilePic
        });
    } catch (error) {
        console.log("Error in login controller", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
    
};

const logout = (req, res) => {
    try {
        res.cookie("jwt", "", {maxAge: 0});
        res.status(200).json({message: "Logged out Succesfully"})
    } catch (error) {
        console.log("Error in login controller", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = {
    signup,
    login,
    logout
};
