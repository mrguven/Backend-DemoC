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

    updated_at: {

         type: Date, required: true, default: Date.now ,
        get: (updatedAt)=> {
            const date = new moment(updatedAt);
            return date.format('D/MM/YYYY  h:mm:ss a')
        }

    },

}, {timestamps:true})


const FeedModel = mongoose.model('Feed',Feed);










module.exports = FeedModel