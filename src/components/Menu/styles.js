import styled from "styled-components";

export const Container = styled.div`
  .dropdown-menu {
    position: absolute;
    top: 70px;
    left: 46px;

    list-style: none;
    text-align: start;
  }

  .dropdown-menu li {
    background: ${({ theme }) => theme.COLORS.PINK};
    cursor: pointer;
  }

  .dropdown-menu li:hover {
    filter: brightness(0.9);
  }

  .dropdown-menu.clicked {
    display: none;
  }

  .dropdown-link {
    display: block;

    width: 100%;
    height: 100%;

    padding: 16px;

    font-weight: 500;

    text-decoration: none;
    color: ${({ theme }) => theme.COLORS.BLACK};
  }
`;
