import mongoose from "mongoose";

const fileSchema = new mongoose.Schema({
  fileName: String,
  filePath: String,
});

// Check if the model already exists before defining it
const File = mongoose.models.File || mongoose.model("File", fileSchema);

export default File;
