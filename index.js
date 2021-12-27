const express= require('express');
const mongoose= require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const app=express();
const password ='12345';
const url= `mongodb+srv://wizba:${password}@cluster0.dbk2t.mongodb.net/test`;
const myEnv = require('dotenv').config();

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// process.env.MONGODB_URL
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