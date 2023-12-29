import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiUser, FiMail, FiLock } from "react-icons/fi";

import { api } from "../../services/api";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { Container, Form, Background, Content } from "./styles";

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleSignUp() {
    if (!name || !email || !password) {
      return alert("Please fill in all fields to complete your registration.");
    }

    api
      .post("/users", { name, email, password })
      .then(() => {
        alert("Registration successful!");
        navigate(-1);
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Registration failed!");
        }
      });
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      handleSignUp();
    }
  }

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
              <Input
                placeholder="Name"
                type="text"
                icon={FiUser}
                onChange={(e) => setName(e.target.value)}
                onKeyDown={handleKeyDown}
              />

              <Input
                placeholder="E-mail"
                type="text"
                icon={FiMail}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={handleKeyDown}
              />

              <Input
                placeholder="Password"
                type="password"
                icon={FiLock}
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={handleKeyDown}
              />
            </div>

            <Button title="Register" onClick={handleSignUp} />

            <button className="back" type="button" onClick={handleBack}>
              Back to Login
            </button>
          </Content>
        </Form>
      </Background>
    </Container>
  );
}
