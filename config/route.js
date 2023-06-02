const express= require('express');
const router = express.Router();

const {getHomePage}= require('../controller/controller.js')


router.get('/', getHomePage);




module.exports= router