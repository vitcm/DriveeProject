import styled from "styled-components";

import theme from "../../styles/theme";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export const Container = styled.div`
  border: 3px solid ${theme.colors.laranja_2};
  background-color: ${theme.colors.gray_ee};
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
  max-width: 80%;
`;

export const ArrowDown = styled(KeyboardArrowDownIcon)`
  cursor: pointer;
`;
