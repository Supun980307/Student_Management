const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser') //use to convert json in to javascript object
const cors = require('cors'); //security



const app = express()
app.use(cors())

//import route

const detailRoute = require('./routes/posts');

app.use(bodyParser.json());

app.use(detailRoute);


const PORT = 8080;
const DB_URL = "mongodb+srv://supun:supun123@cluster0.pwlmd9k.mongodb.net/";





mongoose.connect(DB_URL)
.then(()=>{
    console.log("DB connected");
})
.catch((err)=> console.log('DB connction error', err));

app.listen(PORT, ()=>{
    console.log(`App is running on ${PORT}`);
})

//app.use(UploadRoute);
