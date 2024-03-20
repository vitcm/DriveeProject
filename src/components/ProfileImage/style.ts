import styled from "styled-components";

import theme from "../../styles/theme";

import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

export const Container = styled.div`
  height: 130px;
  width: 130px;
  border: 3px solid ${theme.colors.laranja_1};
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

export const ImgSymbol = styled(PersonOutlineOutlinedIcon)`
  width: 100px !important;
  height: 100px !important;
  color: ${theme.colors.laranja_1};
`;
