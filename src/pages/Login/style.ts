import styled from "styled-components";

import theme from "../../styles/theme";

export const Container = styled.div`
  flex: 1;
  min-height: 100vh;
  background-color: ${theme.colors.gray_dc};
  padding: 5rem 30rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 30px;
`;
