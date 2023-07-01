import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  > header {
    width: 100%;
    height: 144px;

    background: ${({ theme }) => theme.COLORS.BACKGROUND_500};

    display: flex;
    align-items: center;
    padding: 0 144px;

    button {
      display: flex;
      align-items: center;
      gap: 8px;
      color: ${({ theme }) => theme.COLORS.PINK};

      background: none;
      border: none;
    }
  }
`;

export const Form = styled.form`
  max-width: 340px;
  margin: 50px auto 0;

  div:nth-child(2),
  div:nth-child(4) {
    margin-bottom: 8px;
  }

  div:nth-child(3) {
    margin-bottom: 24px;
  }
`;

export const Avatar = styled.div`
  position: relative;
  margin: -140px auto 30px;

  width: 186px;
  height: 186px;

  > img {
    width: 186px;
    height: 186px;
    border-radius: 50%;

    object-fit: cover;
  }

  > label {
    width: 48px;
    height: 48px;

    background-color: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    position: absolute;
    bottom: 7px;
    right: 7px;

    cursor: pointer;

    input {
      display: none;
    }

    svg {
      width: 20px;
      height: 20px;

      color: ${({ theme }) => theme.COLORS.BLACK};
    }
  }
`;
