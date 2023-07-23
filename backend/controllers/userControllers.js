// business logic 
const User = require('../models/userModel')



exports.home = (req,res)=>{
    res.send("hello there")
};

exports.createUser = async (req,res)=>{
    try{
        const{name,email} = req.body;

        if(!name || !email){
            throw new Error("name and email are required");
        }
        const userExists = await User.findOne({email})
        if(userExists){
            throw new Error('email already exists')
        }

        //inserting into database
        const user = await User.create({name,email});
        res.status(201).json({
            success:true,
            message:'user created successfully',
            user
        })

    } catch (error){
        console.log(error)
    }
}

exports.getUser = async (req,res)=>{
    try {
        const users =await User.find();
        res.status(200).json({
            success:true,
            users,
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
}

exports.editUser = async (req,res)=>{
    try {
        const user = await User.findByIdAndUpdate(req.params.id,req.body);
        res.status(200).json({
            success:true,
            message:"user updated successfully"
        })
    } catch (error) {
        console.log(error);
        res.status(401).json({
            success:false,
            message:error.message
        })
    }
}




exports.deleteUser = async(req,res)=>{
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        res.status(200).json({
            success:true,
            message:"user deleted successfully"
        })
    } catch (error) {
        console.log(error);
        res.status(401).json({
            success:false,
            message:error.message
        })
    }
}

// module.exports = {home}