import styled from "styled-components";

import theme from "../../styles/theme";

import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";

// Overlay para o fundo escurecido
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; // Certifique-se de que o modal fique por cima de outros conteúdos
`;

export const Container = styled.div`
  width: 400px;
  background-color: ${theme.colors.gray_dc};
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

export const Header = styled.div`
  background-color: ${theme.colors.laranja_3};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

export const Title = styled.div`
  font-family: "Bai Jamjuree";
  font-size: 16px;
  color: ${theme.colors.black};
`;

export const CloseIconImage = styled(CloseIcon)`
  cursor: pointer;
  color: ${theme.colors.black};
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const IconTypeError = styled(ReportGmailerrorredIcon)`
  font-size: 40px;
  color: ${theme.colors.laranja_3};
`;

export const IconTypeSuccess = styled(CheckIcon)`
  font-size: 40px;
  color: ${theme.colors.laranja_3};
`;

export const MessageBody = styled.div`
  font-family: "Bai Jamjuree";
  font-size: 12px;
  color: ${theme.colors.gray_text};
  margin-top: 20px;
  text-align: center;
`;
