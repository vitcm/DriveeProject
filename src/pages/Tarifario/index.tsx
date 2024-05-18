import React, { useState } from "react";
import { Container, Section1, Section2, Section3, Section4 } from "./style";
import { SearchInput } from "../../components/SearchInput";
import { Select } from "../../components/Select";
import { List } from "../../components/List";
import { Button } from "../../components/Button";
import { Title } from "../../components/Title";
import { extrasCars, savedCars } from "../../utils/bibli";

export function Tarifario() {
  const [searchCarText, setSearchCarText] = useState("");
  const [searchExtraText, setSearchExtraText] = useState("");

  const handleSearchCarChange = (value: string) => {
    setSearchCarText(value);
  };

  const handleSearchExtraChange = (value: string) => {
    setSearchExtraText(value);
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

  // Garantir que os dados retornados sejam sempre arrays
  const filteredSavedCars = filterData(savedCars() || [], searchCarText);
  const filteredExtrasCars = filterData(extrasCars() || [], searchExtraText);

  return (
    <Container>
      <Title title="CARROS" color="#C3C3C3" $titleColor={"#374957"} />
      <Section1>
        <SearchInput title="" type="text" onChange={handleSearchCarChange} />
      </Section1>
      <Section2>
        <List columns={4} data={filteredSavedCars} minRows={7} />
      </Section2>
      <Title title="EXTRAS" color="#C3C3C3" $titleColor={"#374957"} />
      <Section3>
        <SearchInput title="" type="text" onChange={handleSearchExtraChange} />
        <List columns={2} data={filteredExtrasCars} minRows={4} />
      </Section3>
      <Section4>
        <Button title="Cadastrar extra" $minWidth="250px" disabled />
      </Section4>
    </Container>
  );
}
