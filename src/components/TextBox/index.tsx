import React from "react";

interface TextBoxProps {
  height: number; // Altura do TextBox
  name?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function TextBox({
  height,
  name,
  value,
  onChange,
}: TextBoxProps) {
  return (
    <textarea
      style={{ height: height + "px" }}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
}
