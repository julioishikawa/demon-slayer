import { Link, useNavigate } from "react-router-dom";


import { Container, Logo, Search, Profile, Content } from "./styles";
import logo from "../../assets/logo.svg";

export function Header({ children }) {
  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  return (
    <Container>
      <Logo>
        <img src={logo} alt="logo do site" />
      </Logo>

      <Search>{children}</Search>

      <Content>
        <div>
          <Link to="/profile">
            <strong>shuhari</strong>
          </Link>

          <Link to="/">Logout</Link>
        </div>

        <Profile to="/profile">
          <img src={logo} alt="logo" />
        </Profile>
      </Content>
    </Container>
  );
}
