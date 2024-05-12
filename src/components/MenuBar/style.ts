import styled from "styled-components";

import theme from "../../styles/theme";

export const Container = styled.div`
  min-height: 100vh;
  min-width: 307px;
  background-color: ${theme.colors.gray_c3};

  display: flex;
  flex-direction: column;
  align-items: center;

  font-family: "Bai Jamjuree";
`;
