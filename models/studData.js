const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({

    id:{
        type: String,
        required: true,
        //unique: true
    },
    name:{
        type: String,
        required: true
    },
    image:{
        type: String,
        // required: true
    },
    age:{
        type: String,
        required: true
    },
    status:{
        type: String,
        required: true
    }
    
       
  

}, {
    timestamps: true
});

module.exports = mongoose.model('Details', postSchema)