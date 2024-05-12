import styled from "styled-components";

import theme from "../../styles/theme";

import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

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
  font-family: "Bai Jamjuree";
  font-size: 14px;
  color: ${theme.colors.black};
`;

export const InputInsert = styled.input`
  background-color: transparent;
  border: 1px solid transparent;
  height: 100%;
  min-width: 80%;
`;

export const Search = styled(SearchOutlinedIcon)``;
