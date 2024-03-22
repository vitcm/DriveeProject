import styled from "styled-components";

import theme from "../../styles/theme";

interface ButtonPropsStyle {
  color?: string;
  height?: string;
  fontSize?: string;
  minWidth?: string;
  disabled?: boolean;
}

export const Container = styled.div<ButtonPropsStyle>`
  background-color: ${(props) =>
    props.disabled
      ? theme.colors.gray_c3
      : props.color
      ? props.color
      : theme.colors.laranja_3};
  color: ${theme.colors.gray_ee};
  min-width: ${(props) => (props.minWidth ? props.minWidth : "50px")};
  max-width: 200px;
  border-radius: 20px;
  height: ${(props) => (props.height ? props.height : "25px")};

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.2rem;
  gap: 10px;

  font-size: ${(props) => (props.fontSize ? props.fontSize : "15px")};
  cursor: ${(props) => (props.disabled ? "context-menu" : "pointer")};
`;
