import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
`;

export const Wrapper = styled.div`
  padding: 40px 144px;
`;

export const Content = styled.div`
  padding: 0 144px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;

  div {
    width: 100%;
    text-align: center;

    h2 {
      margin-bottom: 8px;
    }

    img {
      width: 100%;
      height: 50vh;
      border-radius: 10px;
    }
  }
`;

export const Footer = styled.footer`
  width: 100%;

  padding: 40px;

  display: flex;
  justify-content: center;

  button {
    width: 200px;

    font-size: 20px;
  }
`;
