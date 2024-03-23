import styled from "styled-components";

import theme from "../../styles/theme";

export const Container = styled.div`
  flex: 1;
  background-color: ${theme.colors.gray_dc};
  padding: 1rem;
  height: 100vh;

  display: flex;
  flex-direction: column;
`;

export const Section1 = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;

  margin-bottom: 20px;

  gap: 20px;
`;

export const Section2 = styled.div`
  display: flex;
  flex-direction: column;

  gap: 10px;

  margin-bottom: 30px;
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

  gap: 10px;

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
  gap: 20px;
`;

export const Text = styled.div``;

export const Options = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

export const TextDiv = styled.div``;

export const TextDoc = styled.div`
  font-size: 10px;
  text-decoration: underline;
  color: #5f788b;

  margin-bottom: 7px;

  cursor: pointer;
`;
