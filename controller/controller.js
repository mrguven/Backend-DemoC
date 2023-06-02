const express = require('express');
const FeedModel = require('../model/commentModel')




const getHomePage =(req,res) => {

    res.redirect('/feed')

}




const getFeedPage = (req,res) =>{
    FeedModel.find().sort({ createdAt: -1 })
                            .then((data)=> {res.render('feed', {blog: data})}) 
                            .catch(()=>res.render('404'))
}


const sendComment = (req,res)=> {

   
        
            const message= new FeedModel(req.body
                    )
                console.log(req.body.Name);
                console.log(req.body.Message);
                      blog.save().then(()=>{res.status(200).redirect('/feed')})
                     .catch((err1)=> {res.render('wrongAddCommentPage', {err1: err1.errors})});
                   
                   
                    
                    console.log('did this function run');
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
            res.render('editedMessage', {blog:result})
        }).catch((err)=>{
            console.log(err);
        })
    }


    const deleteUser = (req,res)=> {


        FeedModel.findByIdAndDelete(req.params.id)
        .then(()=>res.redirect('/feed')).catch(()=>res.redirect('404.html'))
        
    }


module.exports={
    getHomePage,getFeedPage,sendComment,getFullMessage,getEditeditMessage,deleteUser}