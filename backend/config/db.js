require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = async() => {

    try{
      await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      });


      console.log('succsess');
    }
      catch (error) {
        console.error('failed');
        process.exit();
      }
    
}

module.exports = connectDB;
