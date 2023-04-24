const mongoose = require('mongoose');
    //    /inotebook for makin inotebook database in mongodbs
const mongoURI = "mongodb://localhost:27017/inotebook";
const connectToMongo = () =>{
    mongoose.connect(mongoURI,()=>{
        console.log("Connectd");
    })
}
module.exports = connectToMongo;