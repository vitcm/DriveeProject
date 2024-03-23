import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;

export const SideBar = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  height: 100vh;
  max-width: 307px;

  @media (max-width: 1000px) {
    display: none;
  }
`;

export const Screen = styled.div`
  display: flex;
  flex: 4;
  width: 100%;
  flex-direction: column;
  height: 100vh;

  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 0;
  }
`;
