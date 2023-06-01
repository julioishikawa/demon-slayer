import { FiMail, FiLock } from "react-icons/fi";
import { Link } from "react-router-dom";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { Container, Form, Background, Content } from "./styles";

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
              <Input placeholder="E-mail" type="text" icon={FiMail} />

              <Input placeholder="Password" type="password" icon={FiLock} />
            </div>

            <Button title="Sign In" />

            <Link to="/register">Create your account</Link>
          </Content>
        </Form>
      </Background>
    </Container>
  );
}
