import styled from "styled-components";

import theme from "../../styles/theme";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

interface SelectStyleProps {
  $disabled?: boolean;
  $bottomPage?: boolean;
}

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
  padding: 0.2rem 1rem;
  gap: 10px;
`;

export const Title = styled.div<SelectStyleProps>`
  font-family: "Bai Jamjuree";
  font-size: 12px;
  color: ${(props) =>
    props.$disabled ? theme.colors.gray_c3 : theme.colors.black};
  max-width: 80%;
`;

export const ArrowDown = styled(KeyboardArrowDownIcon)<SelectStyleProps>`
  cursor: ${(props) => (props.$disabled ? "" : "pointer")};
  color: ${(props) =>
    props.$disabled ? theme.colors.gray_c3 : theme.colors.black};
`;

export const OptionsContainer = styled.div<SelectStyleProps>`
  position: absolute;
  top: 33px;
  left: 0;
  width: 100%;
  max-height: ${(props) => (props.$bottomPage ? "40px" : "120px")};
  overflow-y: auto;
  background-color: ${theme.colors.gray_ee};
  z-index: 999;
`;

export const Option = styled.div`
  font-family: "Bai Jamjuree";
  font-size: 12px;
  border: 1px solid ${theme.colors.gray_c3};
  min-height: 30px;
  padding: 10px;
  display: flex;
  align-items: center;

  cursor: pointer;
`;
