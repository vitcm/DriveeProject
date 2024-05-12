import React, { useState } from "react";

import { Title, Container, CloseButton } from "./style";

interface CheckboxProps {
  label: string;
  onSave: (imagePath: string, name?: string, value?: string) => void;
  name?: string;
  value?: string;
}

export default function CheckboxImage({
  label,
  onSave,
  name,
  value,
}: CheckboxProps) {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imageName, setImageName] = useState<string>("");
  const [imagePath, setImagePath] = useState<string>("");

  const handleRemoveImage = () => {
    setSelectedImage(null);
    setImageName("");
    setImagePath(""); // Limpa o caminho da imagem quando removida
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      setSelectedImage(file);
      setImageName(file.name);
      // Constrói o caminho local da imagem
      const localImagePath = URL.createObjectURL(file);
      setImagePath(localImagePath);
      // Chama a função onSave imediatamente
      onSave(localImagePath, name, value);
    }
  };

  return (
    <Container style={{ display: "flex", gap: "10px" }}>
      <input type="checkbox" checked={!!selectedImage} readOnly />
      <Title>{label}</Title>
      {!selectedImage && (
        <input type="file" accept="image/*" onChange={handleImageChange} />
      )}
      {selectedImage && (
        <div style={{ display: "flex", gap: "5px" }}>
          <span>{imageName}</span>
          <CloseButton onClick={handleRemoveImage}>X</CloseButton>
        </div>
      )}
    </Container>
  );
}
