import styled from "styled-components";

import theme from "../../styles/theme";

export const Container = styled.div`
  width: 100%;
  height: 35px;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  color: ${theme.colors.gray_text};
  &:hover {
    background-color: ${theme.colors.gray_d3};
  }
`;
