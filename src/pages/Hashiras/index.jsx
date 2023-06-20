import { useNavigate } from "react-router-dom";
import { FiSearch, FiArrowLeft } from "react-icons/fi";

import { Container, Content, Wrapper } from "./styles";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { HashiraNote } from "../../components/HashiraNote";

export function Hashiras() {
  const navigate = useNavigate();

  function handleBack() {
    navigate("/");
  }

  return (
    <Container>
      <Header>
        <Input placeholder="Search" icon={FiSearch} />
      </Header>

      <Wrapper>
        <h1>Hashira's Ranking</h1>

        <button type="button" onClick={handleBack}>
          <FiArrowLeft />
          Back
        </button>
      </Wrapper>

      <Content>
        <HashiraNote title="Rengoku" description="dskdoawkdaw" />
        <HashiraNote />
      </Content>
    </Container>
  );
}
