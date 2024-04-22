import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
  title: String,
});

const Post = mongoose.models.Post || mongoose.model("Post", PostSchema);

export default Post;
