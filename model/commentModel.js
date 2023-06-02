const moment = require('moment/moment');
const mongoose = require('mongoose');



const Feed =mongoose.Schema({
    Name:{
        type:String,
        required:true,
        maxlength:15
    },
    Message:{
    type:String,
    required:true,
    maxlength:40
    },

   

}, {timestamps:true})


const FeedModel = mongoose.model('Feed',Feed);










module.exports = FeedModel