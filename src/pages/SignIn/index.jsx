import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { authUse } from "../../hooks/auth";

import { FiMail, FiLock } from 'react-icons/fi';

import { Container, Form, Background } from "./styles";

import { Input } from '../../components/Input';
import { TextButton } from "../../components/TextButton";
import { Button } from "../../components/Button";

export function SignIn() {

  const { signIn } = authUse();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSignIn() {
    signIn({ email, password });
  }

  function handleRegister() {
    navigate('/register');
  }

  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>
        <h3>Faça seu Login</h3>
        <Input
          icon={FiMail}
          placeholder="Email"
          onChange={e => setEmail(e.target.value)}
        />
        <Input
          icon={FiLock}
          placeholder="Password"
          type="password"
          onChange={e => setPassword(e.target.value)}
        />
        <Button
          title="Entrar"
          onClick={handleSignIn}
        />
        <TextButton
          title="Criar uma conta"
          onClick={handleRegister}
        />
      </Form>
      <Background />
    </Container>
  )
}