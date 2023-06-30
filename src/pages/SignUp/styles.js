import styled from "styled-components";
import backgroundImg from "../../assets/bg.jpg";

export const Container = styled.div`
  height: 100vh;
  display: flex;
`;

export const Form = styled.form`
  height: 100vh;

  padding: 0 120px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    width: 100%;
  }

  div:nth-child(1),
  div:nth-child(2) {
    margin-bottom: 8px;
  }

  > h1 {
    font-size: 48px;

    background-image: linear-gradient(
      45deg,
      #ff859b,
      #ff859b,
      #e80a0a,
      #e80a0a
    );
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }

  > h2 {
    font-size: 24px;
    margin: 38px 0;
  }

  > p {
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  > a {
    margin: 32px auto 0;
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  > .back {
    margin-top: 32px;

    color: ${({ theme }) => theme.COLORS.PINK};

    background: none;
    border: none;
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center;
  background-size: cover;
`;
