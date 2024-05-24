import React, { useState, useEffect, useRef } from "react";
import { Container, Title, ArrowDown, OptionsContainer, Option } from "./style";

interface SelectProps {
  title: string;
  options: any[];
  name?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  bottomPage?: boolean;
}

export function Select({
  title,
  options,
  name,
  value,
  onChange,
  disabled,
  bottomPage,
}: SelectProps) {
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
          type: "select",
        },
      } as React.ChangeEvent<HTMLInputElement>);
  };

  return (
    <Container ref={selectRef}>
      <Title $disabled={disabled} onClick={handleToggleOptions}>
        {selectedOption || title}
      </Title>
      <ArrowDown
        $disabled={disabled}
        onClick={disabled ? undefined : handleToggleOptions}
      />
      {showOptions && (
        <OptionsContainer $bottomPage={bottomPage}>
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
