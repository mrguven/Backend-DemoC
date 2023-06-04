
const mongoose = require('mongoose');
mongoose.set('runValidators', true);


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