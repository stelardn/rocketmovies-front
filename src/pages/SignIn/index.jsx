import { Container, Form, Background } from "./styles";

import { FiMail, FiLock } from 'react-icons/fi';

import { Input } from '../../components/Input';
import { TextButton } from "../../components/TextButton";
import { Button } from "../../components/Button";

export function SignIn() {
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>
        <h3>Faça seu Login</h3>
        <Input
          icon={FiMail}
          placeholder="Email" />
        <Input
          icon={FiLock}
          placeholder="Password"
          type="password"
        />
        <Button title="Entrar" />
        <TextButton title="Criar uma conta" />
      </Form>
      <Background />
    </Container>
  )
}