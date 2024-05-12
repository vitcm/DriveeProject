import React, { useEffect, useState } from "react";

interface CheckboxProps {
  label: string;
  isChecked: boolean;
  onChange: () => void;
}

function Checkbox({ label, isChecked, onChange }: CheckboxProps) {
  return (
    <label style={{ fontFamily: "Bai Jamjuree", fontSize: "14px" }}>
      <input type="checkbox" checked={isChecked} onChange={onChange} />
      {label}
    </label>
  );
}

interface CheckBoxProps {
  options: string[];
  onChange: (selectedLabels: string) => void;
}

export default function CheckBox({ options, onChange }: CheckBoxProps) {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleCheckboxChange = (option: string) => {
    setSelectedOptions((prevSelectedOptions) => {
      if (prevSelectedOptions.includes(option)) {
        return prevSelectedOptions.filter((item) => item !== option);
      } else {
        return [...prevSelectedOptions, option];
      }
    });
  };

  useEffect(() => {
    const selectedLabels = selectedOptions
      .map((opt) => options.find((o) => o === opt))
      .join(",");
    onChange(selectedLabels);
  }, [selectedOptions]);

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
