
const express = require('express')
const mongoose = require('mongoose');
    //    /inotebook for makin inotebook database in mongodbs
const mongoURI = "mongodb://localhost:27017/letscommunicate";


mongoose.connect(mongoURI,{ useNewUrlParser: true,useUnifiedTopology: true })
.then(()=>console.log("Connectd"))
.catch((err)=>console.log(err));


// const express = require('express')
var cors = require('cors')

// connectToMongo();

const app = express();
app.use(cors());
const port = 4000
app.use(express.json())
app.get('/',(req,res)=>{
    res.send('hello1')
})
app.use('/api/auth',require('./routes/auth'))
app.use('/api/notes',require('./routes/notes'))
app.listen(port,()=>{
    console.log("Hello1");
    // console.log(dbUrl)
})