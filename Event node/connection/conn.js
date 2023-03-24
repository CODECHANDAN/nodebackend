const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/event",{
   
    useNewUrlParser :true,
    useUnifiedTopology : true
}).then(()=>{
    console.log("connection sucessful")
}).catch((e)=>{
    console.log(e)
})

