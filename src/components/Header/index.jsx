import { Container, Logo, Search, Menu } from "./styles";
import logo from "../../assets/logo.svg";
import menu from "../../assets/menu.jpg";

export function Header({ children }) {
  return (
    <Container>
      <Logo>
        <img src={logo} alt="logo do site" />
      </Logo>

      <Search>{children}</Search>

      <Menu>
        <img src={menu} alt="imagem do menu" />
      </Menu>
    </Container>
  );
}
