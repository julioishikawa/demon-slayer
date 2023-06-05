import { Tag } from "../../components/Tag";

import { Container } from "./styles";
import img from "../../assets/oni.jpg";

export function OniNote({ title, description, ...rest }) {
  return (
    <Container {...rest}>
      <img src={img} alt="char image" />

      <div>
        <h1>{title}</h1>

        <p>{description}</p>

        <footer>
          <Tag title="Upper Moon 3" />
        </footer>
      </div>
    </Container>
  );
}
