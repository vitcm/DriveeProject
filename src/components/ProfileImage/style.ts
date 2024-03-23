import styled from "styled-components";

import theme from "../../styles/theme";

import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

interface ProfileImageProps {
  width?: string;
  height?: string;
}

export const Container = styled.div<ProfileImageProps>`
  height: ${(props) => (props.height ? props.height : "130px")};
  width: ${(props) => (props.width ? props.width : "130px")};
  border: 3px solid ${theme.colors.laranja_1};
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

export const ImgSymbol = styled(PersonOutlineOutlinedIcon)`
  width: 80% !important;
  height: 80% !important;
  color: ${theme.colors.laranja_1};
`;
