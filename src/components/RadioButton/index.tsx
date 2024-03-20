import React, { useState } from "react";

interface RadioButtonProps {
  options: string[];
}

const RadioButton: React.FC<RadioButtonProps> = ({ options }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionChange = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        paddingRight: "10rem",
      }}
    >
      {options.map((option, index) => (
        <label key={index}>
          <input
            type="radio"
            value={option}
            checked={selectedOption === option}
            onChange={() => handleOptionChange(option)}
          />
          {option}
        </label>
      ))}
    </div>
  );
};

export default RadioButton;
