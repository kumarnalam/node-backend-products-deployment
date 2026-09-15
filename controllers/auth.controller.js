const { signUp, loggedIn, loggedInfoUser } = require('../services/auth.service');
const readEvent = require('../utils/eventEmitter');


const signUphandlerController = async (req, res) => {
   try {
     // console.log(req.body);
      const user = await signUp(req.body.name, req.body.email, req.body.password);

      res.status(201).json(
        {
            message: "User Created Successfully",
            user
        }
      )
   } catch(error) {
     res.status(400).json({
        message: error.message
     })
   }
}

const loginHandlerController = async(req, res) => {
    try {
        const loggedUser = await loggedIn(req.body.email, req.body.password);

        readEvent.emit("loggedSuccessfully", {loggedUser: loggedUser});

        res.status(200).json({
          message: "Logged in successfully",
          user: loggedUser,
        });
    } catch(error) {
        res.status(400).json({
            message: error.message
        })
    }
}

const getMehandlerController = async(req,res) => {
   try {
       const userDetails = await loggedInfoUser(req.user.id);

       if(!userDetails) {
           return res.status(400).json({
            message: "User not found"
           })
       }

       res.status(200).json({
        message: "User fetched successfully",
        user: userDetails
       })


   }
   catch(error) {
     res.status(500).json({
       message: error.message
     })
   }
}

module.exports = {signUphandlerController, loginHandlerController, getMehandlerController}