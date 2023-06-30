import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  max-height: 222px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};

  display: flex;
  justify-content: flex-start;
  align-items: center;

  border: none;
  border-radius: 16px;

  > img {
    width: 222px;
    height: 222px;
    border-radius: 10px 0 0 10px;
    object-fit: cover;
  }
`;

export const Content = styled.div`
  width: 100%;
  padding: 32px;

  > h1 {
    text-align: left;
    font-weight: 700;
    font-size: 24px;

    margin-bottom: 8px;

    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  > p {
    margin: 15px 0 30px 0;

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

  > footer {
    width: 100%;

    display: flex;
    margin-top: 24px;
  }
`;
