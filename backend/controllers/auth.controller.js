const User = require("../models/user.model.js");

const signup = async(req, res) => {
    try {
        const {fullName, username, mobile, password, confirmPassword, gender} = req.body;

        if(password !== confirmPassword){
            return res.status(400).json({error:'Password do not Match !!'})
        }

        const user = await User.findOne({username});

        if(user){
            return res.status(400).json({error:'UserName or Mobile Already exists'})
        }

    } catch (error) {
        
    }
};

const login = (req, res) => {
    console.log('login User'); 
};

const logout = (req, res) => {
    console.log('logout User');
};

module.exports = {
    signup,
    login,
    logout
};
