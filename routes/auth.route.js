const express = require('express');
const authvalidateToken = require("../middleware/auth.middleware");
const {signUphandlerController, loginHandlerController, getMehandlerController} = require('../controllers/auth.controller');



const route = express.Router();

/**
 * @swagger
 * /api/auth/signup:
 *   post:
 *     summary: Register new user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *               - password
 *             properties:
 *               name:
 *                 type: string
 *                 example: Ravi
 *               email:
 *                 type: string
 *                 example: ravi@example.com
 *               password:
 *                 type: string
 *                 format: password
 *                 example: StrongPass123!
 *     responses:
 *       201:
 *         description: User registered successfully
 *       400:
 *         description: Invalid input
 */


route.post('/signup', signUphandlerController);

route.post('/login', loginHandlerController);

route.get('/me', authvalidateToken, getMehandlerController);


module.exports = route;
