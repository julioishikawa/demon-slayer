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

  margin-bottom: 20px;
  padding: 40px 144px 0;

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
  padding: 20px 144px;

  display: flex;
  flex-direction: column;
  gap: 20px;

  h1 {
    margin-bottom: 20px;
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

export const Scrollbar = styled.div`
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
