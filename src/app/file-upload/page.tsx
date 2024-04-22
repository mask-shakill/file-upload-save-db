"use client";

import React, { useState } from "react";

const FileUpload: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [title, setTitle] = useState("");
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(file, title);
    const data = new FormData();
    if (file) {
      data.set("file", file);
      data.set("title", title);
      const result = await fetch("api/upload", {
        method: "POST",
        body: data,
      });
      console.log(result);
    } else {
      console.error("No file selected");
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const selectedFile = event.target.files[0];
      setFile(selectedFile);
    }
  };
  const handleChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };
  return (
    <div>
      <h1>upload image</h1>
      <form onSubmit={handleSubmit}>
        <input name="file" onChange={handleChange} type="file" />
        <input
          type="text"
          name="title"
          value={title}
          onChange={handleChangeTitle}
        />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
};

export default FileUpload;
