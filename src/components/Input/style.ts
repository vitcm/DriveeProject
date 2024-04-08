import styled from "styled-components";

import theme from "../../styles/theme";

export const Container = styled.div`
  border: 3px solid ${theme.colors.laranja_2};
  background-color: ${theme.colors.gray_ee};
  width: 100%;
  border-radius: 20px;
  height: 35px;

  display: flex;
  align-items: center;
  padding: 0.2rem 1rem;
  gap: 10px;
`;

export const Title = styled.div`
  font-size: 15px;
  color: ${theme.colors.black};
  max-width: 40%;
`;

export const InputInsert = styled.input`
  background-color: transparent;
  border: 1px solid transparent;
  height: 100%;
  width: 60%;
`;
