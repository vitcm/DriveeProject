import React, { useState } from "react";
import { Container, Section1, Section2 } from "./style";
import { SearchInput } from "../../components/SearchInput";
import { Select } from "../../components/Select";
import { List } from "../../components/List";
import { Title } from "../../components/Title";
import { reservationData } from "../../utils/bibli";

export function Historico() {
  const [reservationCarsText, setReservationCarsText] = useState("");

  const handleSearchCarChange = (value: string) => {
    setReservationCarsText(value);
  };

  const filterData = (data: Array<{ [key: string]: any }>, query: string) => {
    if (!query) return data;

    return data.filter((item) => {
      if (!item || typeof item !== "object") return false;

      return Object.values(item).some((val) =>
        val ? String(val).toLowerCase().includes(query.toLowerCase()) : false
      );
    });
  };

  const filteredSavedCars = filterData(
    reservationData() || [],
    reservationCarsText
  );

  return (
    <Container>
      <Title
        title="HISTÓRICO RESERVAS"
        color="#c3c3c3"
        $titleColor={"#374957"}
      />
      <Section1>
        <SearchInput title="" type="text" onChange={handleSearchCarChange} />
      </Section1>
      <Section2>
        <List columns={4} data={filteredSavedCars} minRows={20} />
      </Section2>
    </Container>
  );
}
