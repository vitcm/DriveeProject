import styled from "styled-components";

import theme from "../../styles/theme";

export const Container = styled.div`
  flex: 1;
  background-color: ${theme.colors.gray_dc};
  padding: 1rem;

  display: flex;
  flex-direction: column;
`;

export const Section1 = styled.div`
  display: flex;
  flex-direction: row;
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
  flex-direction: column;

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
  justify-content: center;
`;

export const Line = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

export const Text = styled.div`
  width: 100%;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  width: 92vw;

  margin-left: 20px;

  gap: 10px;
`;
