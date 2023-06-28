import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  margin: 0 144px 10px 144px;
  padding: 30px 40px 40px 40px;

  background-color: black;
  border-radius: 0 0 10px 10px;

  img {
    width: 50%;
    height: 440px;
    border: 1px solid white;

    object-fit: cover;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  margin-bottom: 24px;

  button {
    display: flex;
    align-items: center;
    gap: 8px;

    background: none;
    border: none;

    color: ${({ theme }) => theme.COLORS.PINK};
  }
`;

export const Infos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  margin-top: 10px;

  > h2 {
    margin-top: 20px;
  }
`;

export const Delete = styled.div`
  display: flex;
  justify-content: center;

  margin-top: 24px;

  .delete {
    display: flex;
    align-items: center;
    gap: 8px;

    padding: 10px;

    font-weight: 500;

    background: none;
    border: none;
    border-radius: 8px;

    background-color: ${({ theme }) => theme.COLORS.PINK};
    color: ${({ theme }) => theme.COLORS.BLACK};
    transition: all 0.3s;
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
