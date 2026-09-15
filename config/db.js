const mongoose = require("mongoose");


const connectBD = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URI);

        console.log("Database connected successfully");
    } catch(error) {
        console.log(error);
        console.log("Mongo URI exists:", !!process.env.MONGO_URI);
console.log("Mongo URI:", process.env.MONGO_URI?.replace(/:([^@]+)@/, ":*****@"));
        process.getMaxListeners(1);

    }
}

module.exports = connectBD;