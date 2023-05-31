import styled from "styled-components";

export const Container = styled.header`
  height: 100px;
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

export const Menu = styled.div`
  img {
    width: 60px;
    height: 60px;

    border-radius: 50%;
  }
`;
