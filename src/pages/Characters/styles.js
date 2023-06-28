import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  padding-bottom: 20px;

  button {
    display: flex;
    align-items: center;
    gap: 8px;

    margin-right: 8px;

    background: none;
    border: none;

    color: ${({ theme }) => theme.COLORS.PINK};
  }
`;

export const Content = styled.div`
  padding: 40px 144px;

  display: flex;
  flex-direction: column;
  gap: 20px;

  overflow-y: auto;

  margin: 2px 4px;

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 8px;
  }
`;

export const Footer = styled.footer`
  width: 100%;

  padding: 0 144px;

  display: flex;
  justify-content: center;

  button {
    width: 200px;
  }
`;
