
const mongoose = require("mongoose");

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGODB);
    console.log("Database Connected.....");
  } catch (err) {
    console.error("Database connection error:", err);
  }
}

module.exports = connectDB

 
