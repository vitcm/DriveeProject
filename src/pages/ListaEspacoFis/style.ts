import styled from "styled-components";

import theme from "../../styles/theme";

export const Container = styled.div`
  flex: 1;
  min-height: 100vh;
  background-color: ${theme.colors.gray_dc};
  padding: 2rem;

  display: flex;
  flex-direction: column;

  gap: 30px;
`;

export const Section1 = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 20px;
`;

export const Section2 = styled.div``;

export const Section3 = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-evenly;
`;
