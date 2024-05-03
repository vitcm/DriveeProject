import React, { useState, useEffect, useRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { Container, ArrowDown } from "./style";

// const customDatePickerStyles = {
//   datePicker: {
//     border: "none",
//     backgroundColor: "transparent",
//   },
//   input: {
//     fontSize: "15px",
//     color: "#030115",
//     maxWidth: " 80%",
//   },
// };

interface DateSelectProps {
  title: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function DateSelect({ title, name, value, onChange }: DateSelectProps) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(
    value ? new Date(value) : null
  );
  const datePickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        datePickerRef.current &&
        !datePickerRef.current.contains(event.target as Node)
      ) {
        // Fechar o seletor de datas quando clicar fora dele
        setSelectedDate(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
    onChange &&
      onChange({
        target: {
          name,
          value: date ? date.toISOString().split("T")[0] : "", // Convertendo para formato AAAA-MM-DD
          type: "date",
        },
      } as React.ChangeEvent<HTMLInputElement>);
  };

  return (
    <Container ref={datePickerRef}>
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="yyyy-MM-dd"
        placeholderText={title}
      />
      <ArrowDown />
    </Container>
  );
}
