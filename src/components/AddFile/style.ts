import styled from "styled-components";

import theme from "../../styles/theme";

import AddIcon from "@mui/icons-material/Add";

export const Container = styled.div`
  border: 3px solid ${theme.colors.laranja_2};
  background-color: rgba(200, 105, 77, 0.2);
  width: 100%;
  border-radius: 20px;
  height: 35px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.2rem;
  gap: 10px;
`;

export const Title = styled.div`
  font-size: 15px;
  color: ${theme.colors.black};
  max-width: 40%;
`;

export const Plus = styled(AddIcon)`
  color: ${theme.colors.laranja_2};

  cursor: pointer;
`;
