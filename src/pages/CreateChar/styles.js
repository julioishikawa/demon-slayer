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

  .good {
    background-image: linear-gradient(90deg, #e7e80a, #e7e80a, #fff, #fff);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }

  .evil {
    background-image: linear-gradient(90deg, #fff, #fff, #e80a0a, #e80a0a);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
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

  transition: animation 500ms;
  animation: downtop 500ms;

  @keyframes downtop {
    0% {
      opacity: 0;
      transform: translateY(15px);
    }

    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
