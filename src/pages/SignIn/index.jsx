import { useState } from "react";
import { FiMail, FiLock } from "react-icons/fi";
import { Link } from "react-router-dom";

import { useAuth } from "../../hooks/auth";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { Container, Form, Background, Content } from "./styles";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useAuth();

  function handleSignIn() {
    signIn({ email, password });
  }
  
  return (
    <Container>
      <Background>
        <Form>
          <Content>
            <h1>Kimetsu no Yaiba</h1>
            <p>Create your character in Demon Slayer universe.</p>

            <h2>Login</h2>

            <div>
              <Input placeholder="E-mail" type="text" icon={FiMail} onChange={e => setEmail(e.target.value)} />

              <Input placeholder="Password" type="password" icon={FiLock} onChange={e => setPassword(e.target.value)} />
            </div>

            <Button title="Sign In" onClick={handleSignIn} />

            <Link to="/register">Create your account</Link>
          </Content>
        </Form>
      </Background>
    </Container>
  );
}
