const token = require('jsonwebtoken');
const { toNamespacedPath } = require('node:path');


const generateToken = (userId, name) => {
    return token.sign(
        {id: userId, name: name},
        process.env.JWT_SECRET,
        {expiresIn: "2h"}
    );
};

module.exports = {generateToken}