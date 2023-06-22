import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-columns: 250px auto;
  grid-template-rows: 105px auto 64px;
  grid-template-areas:
    "menu header"
    "list content"
    "newchar content";

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
`;

export const Menu = styled.div`
  grid-area: menu;

  display: flex;
  justify-content: center;
  align-items: center;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.PINK};

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  > img {
    width: 100%;
    height: 105px;
  }
`;

export const List = styled.ul`
  grid-area: list;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  padding: 34px 0;
  text-align: center;
  
  > li {
    list-style: none;
    margin-bottom: 24px;
  }

  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.GRAY_500};
    border-radius: 8px;
  }
`;

export const Wrapper = styled.div`
  grid-area: content;

  text-align: center;
  padding: 40px 0;
`;

export const Content = styled.div`
  grid-area: content;

  padding: 0 144px;

  display: flex;
  flex-direction: column;
  align-items: center;
  
  gap: 20px;

  div {
    width: 100%;
    text-align: center;

    h2 {
      margin-bottom: 8px;
    }

    img {
      width: 100%;
      height: 50vh;
      border-radius: 10px;
    }
  }
`;

export const NewChar = styled(Link)`
  grid-area: newchar;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 20px;
  font-weight: 500;

  background-color: ${({ theme }) => theme.COLORS.PINK};
  color: ${({ theme }) => theme.COLORS.BLACK};
`;

export const Scrollbar = styled.div`
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.PINK};
  }
`;