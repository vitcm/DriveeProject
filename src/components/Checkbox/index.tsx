import React, { useState } from "react";

interface CheckboxProps {
  label: string;
  isChecked: boolean;
  onChange: () => void;
}

function Checkbox({ label, isChecked, onChange }: CheckboxProps) {
  return (
    <label>
      <input type="checkbox" checked={isChecked} onChange={onChange} />
      {label}
    </label>
  );
}

interface CheckboxGroupProps {
  options: string[];
}

export default function CheckboxGroup({ options }: CheckboxGroupProps) {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleCheckboxChange = (option: string) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {options.map((option, index) => (
        <Checkbox
          key={index}
          label={option}
          isChecked={selectedOptions.includes(option)}
          onChange={() => handleCheckboxChange(option)}
        />
      ))}
    </div>
  );
}
