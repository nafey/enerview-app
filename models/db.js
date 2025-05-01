import mongoose from "mongoose";

const connectDB = async () => {
  if (mongoose.connections[0].readyState) return; // Use existing connection if available

  try {
    await mongoose.connect(process.env.DATABASE_URI);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Error connecting to MongoDB", err);
    process.exit(1);
  }
};

export default connectDB;
