import React, { useState } from "react";
import { Container, Title, ArrowDown, OptionsContainer, Option } from "./style";

interface SelectProps {
  title: string;
  options: string[]; // ou você pode definir o tipo do objeto recebido
}

export function Select({ title, options }: SelectProps) {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null); // Estado para armazenar a opção selecionada

  const handleToggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const handleSelectOption = (option: string) => {
    setSelectedOption(option);
    setShowOptions(false); // Fecha as opções após selecionar uma
  };

  return (
    <Container>
      <Title onClick={handleToggleOptions}>{selectedOption || title}</Title>{" "}
      {/* Mostra a opção selecionada ou o título */}
      <ArrowDown onClick={handleToggleOptions} />
      {showOptions && (
        <OptionsContainer>
          {options.map((option, index) => (
            <Option key={index} onClick={() => handleSelectOption(option)}>
              {option}
            </Option>
          ))}
        </OptionsContainer>
      )}
    </Container>
  );
}
