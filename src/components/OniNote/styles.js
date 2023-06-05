import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  max-height: 220px;

  margin-bottom: 20px;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};
  border: none;
  border-radius: 10px;

  display: flex;
  align-items: center;

  img {
    height: 100%;
    border-radius: 10px 0 0 10px;
  }

  div {
    width: 100%;

    padding: 20px;
    text-align: left;

    h1 {
      font-weight: 700;
      font-size: 24px;

      margin-bottom: 28px;

      color: ${({ theme }) => theme.COLORS.WHITE};
    }

    p {
      max-height: 53px;

      text-align: left;
      font-weight: 400;
      font-size: 16px;

      overflow: hidden;
      text-overflow: ellipsis;

      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;

      color: ${({ theme }) => theme.COLORS.GRAY_500};
    }
  }
  footer {
    width: 100%;

    text-align: end;
    text-justify: end;
    margin-top: 24px;
  }
`;
