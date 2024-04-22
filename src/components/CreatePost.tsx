"use client";

import React, { useState, ChangeEvent } from "react";

const CreatePost = () => {
  const [title, setTitle] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(title);
    const result = await fetch("/api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title }), // Send title as part of an object
    });
    console.log(result);
  };

  return (
    <div>
      <h1>Create a Post</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" value={title} onChange={handleChange} />
        <button type="submit">Post</button>
      </form>
    </div>
  );
};

export default CreatePost;
