import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-columns: 250px auto;
  grid-template-rows: 105px auto 64px;
  grid-template-areas:
    "logo header"
    "list content"
    "newchar content";

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
`;

export const Navbar = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.PINK};
  background: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  .nav-menu {
    display: grid;
    grid-template-columns: repeat(5, auto);

    list-style: none;
    text-align: center;
    justify-content: end;
  }

  .nav-item {
    display: flex;
    align-items: center;
    height: 80px;
  }

  .nav-links {
    display: flex;
    gap: 8px;
    align-items: center;

    padding: 0.5rem 1rem;

    color: ${({ theme }) => theme.COLORS.PINK};
    text-decoration: none;
  }

  .nav-links:hover {
    filter: brightness(0.9);
    transition: filter 0.3s;
  }

  .nav-links-mobile {
    display: none;
  }

  .menu-icon {
    display: none;
  }

  @media screen and (max-width: 960px) {
    .NavbarItems {
      position: relative;
    }

    .nav-menu {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 90vh;
      position: absolute;
      top: 80px;
      left: -100%;
      opacity: 1;
      transition: all 0.5s ease;
    }

    .nav-menu.active {
      background: #242222;
      left: 0;
      opacity: 1;
      transition: all 0.5s ease;
      z-index: 1;
    }

    .nav-links {
      text-align: center;
      padding: 2rem;
      width: 100%;
      display: table;
    }

    .nav-links:hover {
      background-color: #1888ff;
      border-radius: 0;
    }

    .menu-icon {
      display: block;
      position: absolute;
      font-size: 1.8rem;
      cursor: pointer;
    }

    .nav-links-mobile {
      display: block;
      text-align: center;
      padding: 1.5rem;
      margin: 2rem auto;
      border-radius: 4px;
      width: 80%;
      background: #1888ff;
      text-decoration: none;
      color: #fff;
      font-size: 1.5rem;
    }

    .nav-links-mobile:hover {
      background: #fff;
      color: #1888ff;
      transition: 250ms;
    }

    button {
      display: none;
    }
  }
`;

export const List = styled.ul`
  grid-area: list;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  padding-top: 24px;
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
    background-color: ${({ theme }) => theme.COLORS.PINK};
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
