import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;

  padding: 40px 0;

  background: ${({ theme }) => theme.COLORS.BACKGROUND_500};

  > header {
    display: flex;
    flex-direction: column;
    gap: 20px;

    > h1 {
      text-align: center;
    }

    > button {
      margin-left: 100px;

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
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }

  img {
    width: 45vw;
    height: 70vh;

    border-radius: 10px;
  }
`;
