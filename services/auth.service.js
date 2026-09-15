const user = require('../models/user.model');
const bcrypt = require('bcryptjs');
const {generateToken} = require('../utils/jwt')


const signUp = async (name, email, password) => {
   const existingUser = await user.findOne({email});

   if(existingUser) {
     throw new Error("User already registred with this email");
   }

   const hashedpassword = await bcrypt.hash(password, 10);

   // console.log("Hashed password:", hashedpassword);

   const new_user = user.create({
    name,
    email,
    password: hashedpassword
   })

   return new_user;


}

const loggedIn = async (email, password) => {
    const existinguser = await user.findOne({ email });

     if (!existinguser) {
        throw new Error("User not found");
    }


    const matchedPassword = await bcrypt.compare(password, existinguser.password);

    if(!matchedPassword) {
        throw new Error("Incorrect Password");
    }

    const token = generateToken(existinguser._id, existinguser.name);

return {
  existinguser,
  token,
};
}

const loggedInfoUser = async(id) => {
  const userInfo = await user.findById(id)
                   .select("-password");

  return userInfo
}

module.exports = {signUp, loggedIn, loggedInfoUser}