import styled from "styled-components";

import theme from "../../styles/theme";

interface TitleProps {
  color?: string;
  $titleColor?: string;
  $maxWidth?: string;
}

export const Container = styled.div<TitleProps>`
  background-color: ${(props) =>
    props.color ? props.color : theme.colors.laranja_2};
  color: ${(props) =>
    props.$titleColor ? props.$titleColor : theme.colors.gray_ee};
  min-width: 50px;
  max-width: ${(props) => (props.$maxWidth ? props.$maxWidth : "200px")};
  border-radius: 20px;
  height: 25px;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.2rem;
  gap: 10px;
`;
