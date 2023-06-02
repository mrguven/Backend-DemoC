const moment = require('moment/moment');
const mongoose = require('mongoose');

const Feed =mongoose.Schema({
    Name:{
        type:String,
        required:true,
        minlength:25
    },
    Message:{
    type:String,
    required:true,
    minlength:100
    },

    updated_at: {

         type: Date, required: true, default: Date.now ,
        get: (updatedAt)=> {
            const date = new moment(updatedAt);
            return date.format('D/MM/YYYY  h:mm:ss a') // it needs to make beter. when we update the post, the time should be updated.
        }

    },

}, {timestamps:true})


const FeedModel = mongoose.model('Comment',Feed);










module.exports = FeedModel