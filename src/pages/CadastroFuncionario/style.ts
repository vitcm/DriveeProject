import styled from "styled-components";

import theme from "../../styles/theme";

export const Container = styled.div`
  flex: 1;
  background-color: ${theme.colors.gray_dc};
  padding: 1rem;
`;

export const Section1 = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;

  margin-bottom: 20px;
`;

export const PersonalData = styled.div`
  display: flex;
  flex-direction: column;
  width: 88vw;

  margin-left: 20px;

  gap: 20px;
`;

export const Line = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

export const Section2 = styled.div`
  display: flex;
  flex-direction: column;

  gap: 20px;

  margin-bottom: 30px;
`;

export const Section3 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 30px;
`;

export const PersonalEmergency = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Section4 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 50px;
  margin-bottom: 30px;
`;

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  gap: 20px;
`;

export const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  gap: 20px;
`;

export const Section5 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 50px;
  margin-bottom: 30px;
`;

export const ErrorColumn = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  position: relative;
`;

export const ErrorTag = styled.span`
  color: ${theme.colors.laranja_1};
  font-family: "Bai Jamjuree";
  font-size: 12px;
  margin-left: 20px;
  margin-top: 37px;
  position: absolute;
`;
