import styled from "styled-components";

import theme from "../../styles/theme";

export const Container = styled.div`
  border-radius: 20px;
  height: 35px;

  display: flex;
  align-items: center;
  padding: 0.2rem;
  gap: 10px;
`;

export const Title = styled.div`
  font-family: "Bai Jamjuree";
  font-size: 14px;
  color: ${theme.colors.black};
  max-width: 80%;
`;

export const CloseButton = styled.div`
  width: 20px;
  height: 20px;
  color: ${theme.colors.laranja_1};
  border-radius: 2px;
  background-color: ${theme.colors.gray_d3};

  display: flex;
  align-items: center;
  justify-content: center;

  font-family: "Roboto";
`;
