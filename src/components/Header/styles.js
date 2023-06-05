import styled from "styled-components";

import { Link } from "react-router-dom";

export const Container = styled.header`
  min-height: 100px;
  width: 100%;

  display: flex;
  align-items: center;

  gap: 64px;

  padding: 10px 90px;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.PINK};
`;

export const Logo = styled.div`
  img {
    width: 70px;
    height: 70px;
  }
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
  padding: 0 64px;
  flex-grow: 1;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-right: 10px;
    line-height: 24px;
  }

  a {
    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }

  span {
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  strong {
    font-size: 18px;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
`;

export const Profile = styled(Link)`
  img {
    width: 60px;
    height: 60px;

    border-radius: 50%;
  }
`;
