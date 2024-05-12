import React, { useState, useEffect, useRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { Container, ArrowDown, PlaceHolder, DivDatePicker } from "./style";

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

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
    if (date) {
      onChange({
        target: {
          name,
          value: date.toISOString().split("T")[0],
          type: "date",
        },
      } as React.ChangeEvent<HTMLInputElement>);
    }
  };

  return (
    <Container ref={datePickerRef}>
      <PlaceHolder>{title}</PlaceHolder>
      <DivDatePicker>
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          dateFormat="dd-MM-yyyy"
        />
      </DivDatePicker>
    </Container>
  );
}
