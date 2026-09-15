const express = require('express');
const authvalidateToken = require("../middleware/auth.middleware");
const {signUphandlerController, loginHandlerController, getMehandlerController} = require('../controllers/auth.controller');



const route = express.Router();


route.post('/signup', signUphandlerController);

route.post('/login', loginHandlerController);

route.get('/me', authvalidateToken, getMehandlerController);


module.exports = route;
