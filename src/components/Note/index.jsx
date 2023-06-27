import { api } from "../../services/api";

import { Container, Content } from "./styles";
import { TagTitle } from "../TagTitle";

export function Note({ data, ...rest }) {
  const charImage = `${api.defaults.baseURL}/files/${data.avatar}`;

  return (
    <Container {...rest}>
      <img src={charImage} alt="Character image" />

      <Content>
        <h1>{data.name}</h1>

        <p>{data.description}</p>

        {data.titles && (
          <footer>
            {data.titles.map((tag) => {
              return <TagTitle key={tag.id} title={tag.title} />;
            })}
          </footer>
        )}
      </Content>
    </Container>
  );
}
