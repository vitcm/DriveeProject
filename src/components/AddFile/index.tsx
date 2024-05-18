import React, { useState, useRef } from "react";
import { Container, Title, Plus } from "./style";

export function AddFile() {
  const [fileName, setFileName] = useState("Adicionar Anexo");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handlePlusClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      setFileName(file.name);
      console.log(file);
    }
  };

  return (
    <Container>
      <Title>{fileName}</Title>
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleFileChange}
        accept="image/*,application/pdf"
      />
      <Plus onClick={handlePlusClick} />
    </Container>
  );
}
