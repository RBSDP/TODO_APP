const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        require : [true,"name is required"],
        trim : true,
        maxlength : [25,"name must be in 25 lenght"]
    },
    email:{
        type:String,
        require:[true,"email is required"],
        unique:true
    },
});

module.exports = mongoose.model("user",userSchema);
