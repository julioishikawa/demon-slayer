import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 40px 0;

  background: ${({ theme }) => theme.COLORS.BACKGROUND_500};
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
