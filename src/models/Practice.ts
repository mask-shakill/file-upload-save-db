import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  input1: String,
  input2: String,
});

const Practice = mongoose.models.Post || mongoose.model("Post", postSchema);

export default Practice;
