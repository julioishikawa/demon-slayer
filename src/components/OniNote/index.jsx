import { TagTitle } from "../../components/TagTitle";

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
          <TagTitle title="Upper Moon 3" />
        </footer>
      </div>
    </Container>
  );
}
