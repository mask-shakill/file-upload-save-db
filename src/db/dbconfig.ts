import mongoose from "mongoose";

const dbConnect = async () => {
  try {
    const connectionString = `mongodb+srv://shakilcse201:pbRoXSvriPBwiScL@nextjsaccelerator.a34knjh.mongodb.net/?retryWrites=true&w=majority&appName=NextJsAccelerator`;

    await mongoose.connect(connectionString);

    console.log("MongoDB connected");
  } catch (error: any) {
    console.error("MongoDB connection error:", error.message);
  }
};

export default dbConnect();
