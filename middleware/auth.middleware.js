const jwt = require('jsonwebtoken');

const authvalidateToken = (req, res, next) => {
   try {

     const authHeader = req.headers.authorization;

     if(!authHeader) {
        return res.status(401).json({
            message: "Token must be required"
        })
     }

     const decodeToken = authHeader.split(" ")[1];

     const decoded = jwt.verify(
        decodeToken,
        process.env.JWT_SECRET
     )

     req.user = decoded;

     next();

   } catch(error) {
     return res.status(401).json({
        message: "Token is invalid are expired"
     })
   }
}

module.exports = authvalidateToken;
