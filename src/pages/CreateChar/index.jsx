import { Link } from "react-router-dom";

import { Container, Content } from "./styles";
import hashira from "../../assets/hashira.jpg";
import oni from "../../assets/oni.jpg";

export function CreateChar() {
  return (
    <Container>
      <h1>CHOOSE YOUR WAY</h1>
      <Content>
        <div>
          <h2>Hashiras</h2>
          <Link to="/createhashira">
            <img src={hashira} alt="hashira picture" />
          </Link>
        </div>

        <h2>or</h2>

        <div>
          <h2>Onis</h2>
          <Link to="/createoni">
            <img src={oni} alt="oni picture" />
          </Link>
        </div>
      </Content>
    </Container>
  );
}
