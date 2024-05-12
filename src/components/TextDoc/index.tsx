import React, { useState } from "react";
import { IconButton } from "@mui/material";
import { AddBox, Clear } from "@mui/icons-material";

interface TextDocProps {
  text: string;
  onImageChange: (file: File | null) => void;
  imageUrl?: string;
}

function TextDoc({ text, onImageChange, imageUrl }: TextDocProps) {
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    onImageChange(file);
  };

  const handleRemoveImage = () => {
    onImageChange(null);
  };

  return (
    <div>
      <span>{text}</span>
      {imageUrl ? (
        <>
          <img
            src={imageUrl}
            alt="Imagem anexada"
            style={{ maxWidth: "100px", maxHeight: "100px" }}
          />
          <IconButton onClick={handleRemoveImage}>
            <Clear />
          </IconButton>
        </>
      ) : (
        <>
          <IconButton component="label">
            <AddBox />
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              style={{ display: "none" }}
            />
          </IconButton>
        </>
      )}
    </div>
  );
}

export default TextDoc;
