import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;

  background: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  > header {
    padding: 0 120px;

    text-align: center;
    font-size: 30px;

    h1 {
      padding: 50px 0px;
    }

    > button {
      display: flex;
      align-items: center;
      gap: 8px;

      background: none;
      border: none;

      color: ${({ theme }) => theme.COLORS.PINK};
    }
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 70px;

  padding: 40px 100px;

  a {
    width: 100%;
    height: 500px;
    display: flex;
    justify-content: center;
  }

  > div {
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }

  img {
    width: 100%;
    border: 1px solid white;

    border-radius: 10px;
    transition: transform 300ms;
  }

  img:hover {
    transform: scale(1.05);
  }
`;
