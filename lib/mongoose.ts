import mongoose from "mongoose";

// this may be const instead of let
let isConnected: boolean = false;

export const connectToDatabase = async () => {
  // prevent unknown field queries
  mongoose.set("strictQuery", true);

  if (!process.env.MONGODB_URL) {
    return console.log("Missing MongoDB URL");
  }

  if (isConnected) {
    return console.log("MongoDB Connected");
  }

  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      dbName: "stackify",
    });

    isConnected = true;
    console.log("MongoDB is Connected");
  } catch (error) {
    console.log("MongoDB connection failed", error);
  }
};
