import { TagTitle } from "../TagTitle";

import { Container } from "./styles";
import img from "../../assets/hashira.jpg";

export function HashiraNote({ title, description, ...rest }) {
  return (
    <Container {...rest}>
      <img src={img} alt="char image" />

      <div>
        <h1>{title}</h1>

        <p>{description}</p>

        <footer>
          <TagTitle title="Flame's Hashira" />
        </footer>
      </div>
    </Container>
  );
}
