import { FiArrowLeft } from "react-icons/fi";

import { Container, Wrapper, Content } from "./styles";

import { Header } from "../../components/Header";
import { Tag } from "../../components/Tag";

export function Details() {
  return (
    <Container>
      <Header />

      <Wrapper>
        <h1>a</h1>
        <button type="button">
          <FiArrowLeft />
          Voltar
        </button>
      </Wrapper>

      <Content>
        <p>KDSOPKDFWOPFQWLDOWPQDKWOKD</p>

        <Tag title="aaaaa" />
      </Content>
    </Container>
  );
}
