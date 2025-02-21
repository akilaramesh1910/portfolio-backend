const mongoose = require("mongoose");
require("dotenv").config();
const app = require('./app'); 

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    setTimeout(() => {
      console.log("Attempting to reconnect to MongoDB...");
      connectDB();
    }, 5000);
  }
};

connectDB();

app.listen(process.env.PORT || 5000, () => {
  console.log(`Listening on port ${process.env.PORT || 5000}`);
});