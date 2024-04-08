import React, { useState, useEffect, useRef } from "react";
import { Container, Title, ArrowDown, OptionsContainer, Option } from "./style";

interface SelectProps {
  title: string;
  options: string[];
}

export function Select({ title, options }: SelectProps) {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const selectRef = useRef<HTMLDivElement>(null); // Referência ao elemento do select

  useEffect(() => {
    // Adiciona um event listener ao documento para fechar as opções ao clicar fora do select
    function handleClickOutside(event: MouseEvent) {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setShowOptions(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleToggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const handleSelectOption = (option: string) => {
    setSelectedOption(option);
    setShowOptions(false);
  };

  return (
    <Container ref={selectRef}>
      <Title onClick={handleToggleOptions}>{selectedOption || title}</Title>
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
