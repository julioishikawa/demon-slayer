import { useNavigate } from "react-router-dom";
import { FiSearch, FiArrowLeft } from "react-icons/fi";

import { Container, Content, Wrapper } from "./styles";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { OniNote } from "../../components/OniNote";
import { Tag } from "../../components/Tag";

export function Onis() {
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
        <h1>Upper Moon's Ranking</h1>

        <button type="button" onClick={handleBack}>
          <FiArrowLeft />
          Back
        </button>
      </Wrapper>

      <Content>
        <OniNote title="Akaza" description="dwqkdopwkodp"></OniNote>
        <OniNote />
      </Content>
    </Container>
  );
}
