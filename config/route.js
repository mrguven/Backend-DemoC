const express= require('express');
const router = express.Router();

const {getHomePage,getFeedPage,sendComment,getFullMessage,
    deleteUser,getEditeditMessage}= require('../controller/controller.js')


router.get('/', getHomePage);

router.get('/feed',getFeedPage)

router.post('/sendComment', sendComment);
router.get('/fullMessage/:id', getFullMessage);

router.get('/editMessage/:id', getEditeditMessage);

router.post('/deleteUser/:id', deleteUser)


module.exports= router