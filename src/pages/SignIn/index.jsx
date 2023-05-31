import { Container, Form, Background, Content } from "./styles";
import { Input } from "../../components/Input";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button";

export function SignIn() {
  return (
    <Container>
      <Background>
        <Form>
          <Content>
            <h1>Kimetsu no Yaiba</h1>
            <p>Create your character in Demon Slayer universe.</p>

            <h2>Login</h2>

            <div>
              <Input placeholder="E-mail" type="text" />

              <Input placeholder="Password" type="password" />
            </div>

            <Button title="Sign In" />

            <Link to="/register">Register</Link>
          </Content>
        </Form>
      </Background>
    </Container>
  );
}
