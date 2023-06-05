import { FiArrowLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

import image from "../../assets/oni.jpg";

import { Container, Wrapper, Content, Infos, Scrollbar } from "./styles";

import { Header } from "../../components/Header";
import { Tag } from "../../components/Tag";

export function Details() {
  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  return (
    <Container>
      <Header />

      <Scrollbar>
        <Content>
          <Wrapper>
            <h1>Akaza</h1>
            <button type="button" onClick={handleBack}>
              <FiArrowLeft />
              Voltar
            </button>
          </Wrapper>

          <img src={image} alt="" />

          <Infos>
            <span>Age: 18</span>
            <span>Gender: Male</span>
            <span>Form: Demon</span>
            <span>Height: 173 cm (5'8")</span>
            <span>Weight: 74 kg (163 lb)</span>
            <span>Skills: Blood Demon Art</span>

            <p>
              Akaza é um demônio de alto nível que aparece durante o arco do
              Trem Infinito. Ele se mostrou como um demônio focado em combate
              corpo-a-corpo, e matou Kyojuro Rengoku devido a isso. Dentro das
              12 Luas Demoníacas, Akaza é a Lua Superior 3.
            </p>
          </Infos>

          <Tag title="Upper Moon Three" />
        </Content>
      </Scrollbar>
    </Container>
  );
}
