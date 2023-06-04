const express = require('express');
const FeedModel = require('../model/commentModel')




const getHomePage =(req,res) => {
    res.redirect('/feed')
}

const sendMessage = (req,res)=> {
   const message= new FeedModel(req.body )
           
   if(req.body==='') {
    res.res.render('feed', {err1: {nameError:'you shoul write name',messageError:'you should write message'}})
   }
   else {
    console.log(req.body.Name);
        console.log(req.body.Message);
        message.save().then(()=>{res.status(200).redirect('/feed')})
             .catch((err1)=> {res.render('usercomment', {err1: err1.errors})});
        }

   }
   
        


const getFeedPage = (req,res) =>{
    FeedModel.find().sort({ createdAt: -1 })
                            .then((data)=> {res.render('feed', {message: data})}) 
                            .catch(()=>res.render('404'))
}


             const getFullMessage = (req,res)=> {
                FeedModel.findById(req.params.id).then((result)=> {
                    res.render('fullMessage', {message:result})
                }).catch((err)=>{
                    console.log(err);
                })
    }


    const getEditeditMessage = (req,res)=> {
            FeedModel.findById(req.params.id).then((result)=> {
            res.render('editedMessage', {message:result})
        }).catch((err)=>{
            console.log(err);
        })
    }


    const deleteUser = (req,res)=> {
        FeedModel.findByIdAndDelete(req.params.id)
        .then(()=>res.redirect('/feed')).catch(()=>res.redirect('404.html'))    
    }


    const updateMessage=(req,res)=> {
        FeedModel.findByIdAndUpdate(req.params.id,req.body,{new: true})
        .then((result)=> res.render('fullMessage', {message:result}))
        .catch((err1)=> {res.render('wrongAddCommentPage', {err1: err1.errors})})    
     }

     
module.exports={
    getHomePage,getFeedPage,sendMessage,getFullMessage,getEditeditMessage,deleteUser,updateMessage}