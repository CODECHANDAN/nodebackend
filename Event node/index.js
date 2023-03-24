const express = require("express");
require("./connection/conn");
const Eventtype = require("./models/event");

const app = express();

app.use(express.json());

app.post("/event",async(req,res)=>{
    try {

        const addingEvent =  new Eventtype(req.body)
        console.log(req.body)
      const insertevent = await addingEvent.save();
        res.status(201).send(insertevent);
    } catch (error) {
        res.status(400).send(e)
    }
})



app.get("/event/:id",async(req,res)=>{
    try {
        const _id = req.params.id;
     const getEvents   = await Eventtype.findById(_id);
        res.send(getEvents);
    } catch (e) {
        res.status(400).send(e)
    }
})


app.patch("/event/:id",async(req,res)=>{
    try {
        const _id = req.params.id;
     const getEvents   = await Eventtype.findByIdAndUpdate(_id,req.body,{
        new:true
     });
        res.send(getEvents);
    } catch (e) {
        res.status(500).send(e)
    }
})


app.delete("/event/:id",async(req,res)=>{
    try {
        const _id = req.params.id;
     const getEvents   = await Eventtype.findByIdAndDelete(_id);
        res.send(getEvents);
    } catch (e) {
        res.status(500).send(e)
    }
})



app.listen(3000,()=>{
    console.log("Server is started")
})