import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";

import { Container, Content, Footer, Wrapper } from "./styles";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import hashiras from "../../assets/hashiras-bg.jpg";
import onis from "../../assets/upper-moons.png";

export function Home() {
  return (
    <Container>
      <Header>
        <Input placeholder="Search" icon={FiSearch} />
      </Header>

      <Wrapper>
        <h1>Characters</h1>
      </Wrapper>

      <Content>
        <div>
          <h2>Hashiras</h2>
          <Link to="/hashiras">
            <img src={hashiras} alt="" />
          </Link>
        </div>

        <div>
          <h2>Upper Moons</h2>
          <Link to="/onis">
            <img src={onis} alt="" />
          </Link>
        </div>
      </Content>

      <Footer>
        <Link to="/create">
          <Button title="New character" />
        </Link>
      </Footer>
    </Container>
  );
}
