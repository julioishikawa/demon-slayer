import { useNavigate } from "react-router-dom";
import { FiSearch, FiArrowLeft } from "react-icons/fi";

import { Container, Content, Wrapper } from "./styles";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { OniNote } from "../../components/OniNote";

export function Onis() {
  const navigate = useNavigate();

  function handleDetails() {
    navigate(`/details/1`);
  }

  function handleBack() {
    navigate("/");
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
        <OniNote
          title="Akaza"
          description="dwqkdopwkodp"
          onClick={handleDetails}
        />
      </Content>
    </Container>
  );
}
