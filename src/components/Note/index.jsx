import { Tag } from "../../components/Tag";

import { Container } from "./styles";
import img from "../../assets/oni.jpg";

export function Note({ ...rest }) {
  return (
    <Container {...rest}>
      <img src={img} alt="" />

      <div>
        <h1>Akaza</h1>

        <p>
          Ele nasceu e foi criado na favela, com um pai doente de quem ele
          cuidou profundamente. Sendo incapaz de comprar remédios, Hakuji não
          teve escolha a não ser roubar do povo da cidade, sendo continuamente
          pego. O magistrado o puniria espancando-o e marcando-o com tatuagens
          criminosas.
        </p>

        <footer>
          <Tag title="Upper Moon 3" />
        </footer>
      </div>
    </Container>
  );
}
