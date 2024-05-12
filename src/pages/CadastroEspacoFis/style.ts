import styled from "styled-components";

import theme from "../../styles/theme";

export const Container = styled.div`
  flex: 1;
  background-color: ${theme.colors.gray_dc};
  padding: 1rem;

  display: flex;
  flex-direction: column;

  gap: 10px;
`;

export const Section1 = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
  gap: 25px;
`;

export const Section2 = styled.div`
  border: 3px solid ${theme.colors.laranja_2};
  background-color: ${theme.colors.gray_ee};
  border-radius: 20px;
  min-width: 400px;
  margin-top: 10px;

  display: flex;
  flex-direction: column;
  padding: 0.2rem 1rem;
  gap: 10px;
`;

export const Section3 = styled.div`
  display: flex;
  flex-direction: row;

  gap: 10px;

  margin-bottom: 30px;
`;

export const Section4 = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 30px;
`;

export const Section5 = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const CarData = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  width: 88vw;

  gap: 10px;
`;

export const Line = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;

  gap: 10px;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;

  margin-top: 20px;
`;

export const Text = styled.div`
  font-family: "Bai Jamjuree";
`;

export const Options = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TextDiv = styled.div``;

export const TextDoc = styled.div`
  font-family: "Bai Jamjuree";
  font-size: 14px;
  text-decoration: underline;
`;

export const ErrorTag = styled.span`
  color: ${theme.colors.laranja_1};
  font-family: "Bai Jamjuree";
  font-size: 12px;
  margin-left: 20px;
  margin-top: 37px;
  position: absolute;
`;

export const ErrorColumn = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  position: relative;
`;
