import React, { useState, useEffect, useRef } from "react";
import { Container, Title, ArrowDown, OptionsContainer, Option } from "./style";

interface SelectProps {
  title: string;
  options: string[];
  name?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function Select({ title, options, name, value, onChange }: SelectProps) {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const selectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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
    onChange &&
      onChange({
        target: {
          name,
          value: option,
          type: "select", // Adicione um tipo para indicar que é um campo de seleção
        },
      } as React.ChangeEvent<HTMLInputElement>); // Cast para o tipo correto
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
