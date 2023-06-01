import { useNavigate } from "react-router-dom";
import { FiUser, FiMail, FiLock } from "react-icons/fi";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { Container, Form, Background, Content } from "./styles";

export function SignUp() {
  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  return (
    <Container>
      <Background>
        <Form>
          <Content>
            <h1>Kimetsu no Yaiba</h1>
            <p>Create your character in Demon Slayer universe.</p>

            <h2>Create your account</h2>

            <div>
              <Input placeholder="Name" type="text" icon={FiUser} />

              <Input placeholder="E-mail" type="text" icon={FiMail} />

              <Input placeholder="Password" type="password" icon={FiLock} />
            </div>

            <Button title="Register" onClick={handleBack} />

            <button className="back" type="button" onClick={handleBack}>
              Back to Login
            </button>
          </Content>
        </Form>
      </Background>
    </Container>
  );
}
