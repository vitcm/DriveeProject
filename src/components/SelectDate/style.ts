import styled from "styled-components";

import theme from "../../styles/theme";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export const Container = styled.div`
  position: relative;
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

export const ArrowDown = styled(KeyboardArrowDownIcon)`
  cursor: pointer;
`;

export const PlaceHolder = styled.div`
  font-family: "Bai Jamjuree";
  font-size: 12px;
  color: ${theme.colors.black};
  max-width: 80%;
`;

export const DivDatePicker = styled.div`
  max-width: 50%;
`;
