import React, { useState } from "react";

interface RadioButtonProps {
  options: string[] | number[];
  title?: string;
}

const RadioButton: React.FC<RadioButtonProps> = ({ options, title }) => {
  const [selectedOption, setSelectedOption] = useState<string | number | null>(
    null
  );

  const handleOptionChange = (option: string | number) => {
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
      {title}
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
