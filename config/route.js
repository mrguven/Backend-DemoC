const express= require('express');
const router = express.Router();

const {getHomePage,getFeedPage,sendMessage,getFullMessage,
    deleteUser,getEditeditMessage,updateMessage}= require('../controller/controller.js')


router.get('/', getHomePage);

router.get('/feed',getFeedPage);

router.post('/sendMessage', sendMessage);
router.get('/fullMessage/:id', getFullMessage);

router.get('/editMessage/:id', getEditeditMessage);

router.post('/deleteUser/:id', deleteUser);

router.post('/updateMessage/:id', updateMessage);



module.exports= router;