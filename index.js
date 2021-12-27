const express= require('express');
const mongoose= require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const app=express();
const myEnv = require('dotenv').config();

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect(process.env.MONGODB_URL,{useNewUrlParser: true});
const con= mongoose.connection;
app.use(express.json());
try{
    con.on('open',() => {
        console.log('connected');
    })
}catch(error)
{
    console.log("Error: "+error);
}

const port=9000;
var routes = require('./routes/routes.js');
routes(app);
app.listen(port, () =>{
    console.log('Server started');
})