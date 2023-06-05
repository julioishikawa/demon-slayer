import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;

  main {
    margin: 0 344px;
    padding: 0 16px 0 0;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;

  header {
    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 30px;
  }

  .infos {
    display: flex;
    gap: 30px;
  }

  h2 {
    font-size: 20px;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  .tags {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 24px;

    margin-top: 24px;
    padding: 16px;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    border-radius: 8px;

    input {
      width: 230px;
    }
  }

  .buttons {
    display: flex;
    gap: 30px;

    margin-bottom: 50px;

    > :nth-child(1) {
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
      color: ${({ theme }) => theme.COLORS.PINK};
      transition: all 0.3s;

      :nth-child(1):hover {
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};
      }
    }

    button {
      margin: 0;
    }
  }
`;

export const Scrollbar = styled.div`
  margin: 2px 5px 0 0;

  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 8px;
  }
`;
