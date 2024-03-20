import styled from "styled-components";

import theme from "../../styles/theme";

export const Container = styled.div`
  background-color: ${theme.colors.laranja_2};
  color: ${theme.colors.gray_ee};
  min-width: 50px;
  max-width: 200px;
  border-radius: 20px;
  height: 25px;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.2rem;
  gap: 10px;
`;
