require('dotenv').config();

const app = require('./app');
const connectDB = require('./config/db');


const PORT = process.env.PORT || 8000;

const server = async () => {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`server connected successfully with port no ${PORT}`);
    })
}

server();