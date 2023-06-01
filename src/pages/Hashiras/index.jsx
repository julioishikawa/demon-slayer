import { useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";

import { Container, Content, Wrapper } from "./styles";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Note } from "../../components/Note";

export function Hashiras() {
  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  return (
    <Container>
      <Header>
        <Input placeholder="Search" icon={FiSearch} />
      </Header>

      <Wrapper>
        <h1>Hashira's Ranking</h1>

        <button type="button" onClick={handleBack}>
          Back
        </button>
      </Wrapper>

      <Content>
        <Note />
        <Note />
      </Content>
    </Container>
  );
}
