import mongoose from "mongoose";

export const dbCon = async () => {
  try {
    await mongoose.connect(process.env.URI!);

    console.log("MongoDB connected");
  } catch (error: any) {
    console.error("MongoDB connection error:", error.message);
  }
};
