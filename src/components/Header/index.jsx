import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";

import { Container, Logo, Search, Profile, Content } from "./styles";
import logo from "../../assets/logo.svg";
import avatar from "../../assets/avatar.jpg";

export function Header({ children }) {
  const { signOut } = useAuth();

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

          <Link to="/" onClick={signOut}>Logout</Link>
        </div>

        <Profile to="/profile">
          <img src={avatar} alt="avatar" />
        </Profile>
      </Content>
    </Container>
  );
}
