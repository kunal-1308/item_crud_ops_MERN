const mongoose = require('mongoose');
const config = require('config');
const db = "mongodb://localhost:27017/CrudDB";

const connectDB = async () => {
  try {
    await mongoose.connect(
      db,
      { useNewUrlParser: true }
    );

    console.log('MongoDB is Connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;