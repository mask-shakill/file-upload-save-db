"use client";

import React, { useState } from "react";

const FileUpload: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(file);
    const data = new FormData();
    if (file) {
      data.set("file", file);
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

  return (
    <div>
      <h1>upload image</h1>
      <form onSubmit={handleSubmit}>
        <input name="file" onChange={handleChange} type="file" />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
};

export default FileUpload;
