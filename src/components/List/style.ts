import styled from "styled-components";

import theme from "../../styles/theme";

interface ContainerProps {
  minRows?: number;
}

export const Container = styled.div<ContainerProps>`
  flex: 1;
  background-color: ${theme.colors.gray_dc};
  display: flex;
  flex-direction: column;
  min-height: ${(props) => props.minRows && props.minRows * 50};
  overflow-y: auto;
`;

export const RowHeader = styled.div`
  background-color: ${theme.colors.laranja_3};
  color: ${theme.colors.gray_text};

  display: flex;
  justify-content: space-between;

  padding: 0.5rem 1rem;
  border-radius: 20px 20px 0 0;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 0.5rem;
  height: 25px;

  &.even-row {
    background-color: ${theme.colors.gray_d3};
  }

  &.odd-row {
    background-color: ${theme.colors.gray_c3};
  }

  &.last-row {
    border-radius: 0 0 20px 20px;
  }
`;

export const Column = styled.div``;
