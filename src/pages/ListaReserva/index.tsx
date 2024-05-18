import React, { useState } from "react";
import { Container, Section1, Section2, Section3 } from "./style";
import { SearchInput } from "../../components/SearchInput";
import { Select } from "../../components/Select";
import { List } from "../../components/List";
import { Button } from "../../components/Button";
import { dataReservationDetails } from "../../utils/bibli";

export function ListaReserva() {
  const [reservationCarsText, setReservationCarsText] = useState("");

  const handleSearchReservationChange = (value: string) => {
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
    dataReservationDetails() || [],
    reservationCarsText
  );

  const options = ["Opção 1", "Opção 2", "Opção 3", "Opção 4"];
  return (
    <Container>
      <Section1>
        <SearchInput
          title=""
          type="text"
          onChange={handleSearchReservationChange}
        />
      </Section1>
      <Section2>
        <List columns={4} data={filteredSavedCars} minRows={18} />
      </Section2>
      <Section3>
        <Button title="Acessar reservas" $minWidth="250px" disabled />
      </Section3>
    </Container>
  );
}
