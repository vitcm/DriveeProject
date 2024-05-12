import styled from "styled-components";

import theme from "../../styles/theme";

export const Container = styled.div`
  flex: 1;
  min-height: 100vh;
  background-color: ${theme.colors.gray_dc};
  padding: 2rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 120px;
`;

export const Section = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const Text = styled.div`
  font-family: "Bai Jamjuree";
  font-size: 18px;
  font-weight: 500;
  color: ${theme.colors.gray_text};
`;

export const Line = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 20px;
`;
