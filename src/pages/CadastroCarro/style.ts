import styled from "styled-components";

import theme from "../../styles/theme";

export const Container = styled.div`
  flex: 1;
  background-color: ${theme.colors.gray_dc};
  padding: 1rem;
  height: 100vh;
`;

export const Section1 = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;

  margin-bottom: 20px;
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
  flex-direction: row;

  gap: 10px;

  margin-bottom: 30px;
`;

export const Section5 = styled.div`
  width: 50%;
`;

export const Section6 = styled.div`
  position: absolute;
  bottom: 50px;
  right: 50px;
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
