const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        
    },

    description:{
        type:String,
        required:true
    },

    location:{
        type:String,
        required:true,
        trim:true
    },

},{timestamps:true})

const Events =  new mongoose.model("Event",eventSchema);
module.exports =  Events;
