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

export const OptionsContainer = styled.div`
  position: absolute;
  top: 33px;
  left: 0;
  width: 100%;
  max-height: 120px;
  overflow-y: auto;
  background-color: ${theme.colors.gray_ee};
  z-index: 999;
`;

export const Option = styled.div`
  border: 1px solid ${theme.colors.gray_c3};
  min-height: 30px;
  padding: 10px;
  display: flex;
  align-items: center;

  cursor: pointer;
`;
