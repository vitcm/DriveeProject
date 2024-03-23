import React, { useState } from "react";

interface TextBoxProps {
  height: number; // Altura do TextBox
}

export default function TextBox({ height }: TextBoxProps) {
  const [text, setText] = useState("");

  const handleChange = (event: any) => {
    setText(event.target.value);
  };

  return (
    <textarea
      style={{ height: height + "px" }}
      value={text}
      onChange={handleChange}
    />
  );
}
