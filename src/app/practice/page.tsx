"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";

const Practice: React.FC = () => {
  const [input1, setInput1] = useState<string>("");
  const [input2, setInput2] = useState<string>("");

  const handleInputChange1 = (e: ChangeEvent<HTMLInputElement>) => {
    setInput1(e.target.value);
  };

  const handleInputChange2 = (e: ChangeEvent<HTMLInputElement>) => {
    setInput2(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(input1, input2);

    try {
      const response = await fetch("api/practice", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          input1,
          input2,
        }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log("Response data:", data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input1}
          onChange={handleInputChange1}
          placeholder="Input 1"
        />
        <input
          type="text"
          value={input2}
          onChange={handleInputChange2}
          placeholder="Input 2"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Practice;
