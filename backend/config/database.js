const mongoose = require('mongoose');



exports.connecttoDb = ()=>{
    mongoose.connect(process.env.MONGO_URL,{
        useNewUrlParser : true,
        useUnifiedTopology :true
    })
    .then((connec)=>{
        console.log(`connected DB :`)
    })
    .catch((err)=>{
        console.log(err.message);
        process.exit(1)
    });

};

