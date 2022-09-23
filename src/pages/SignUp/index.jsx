import { Container, Form, Background } from "./styles";

import { FiMail, FiUser, FiLock, FiArrowLeft } from 'react-icons/fi';

import { Input } from '../../components/Input';
import { TextButton } from "../../components/TextButton";
import { Button } from "../../components/Button";

export function SignUp() {
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>
        <h3>Crie sua conta</h3>
        <Input
          icon={FiUser}
          placeholder="Nome" />
        <Input
          icon={FiMail}
          placeholder="Email" />
        <Input
          icon={FiLock}
          placeholder="Password"
          type="password"
        />
        <Button title="Cadastrar" />
        <TextButton
          icon={FiArrowLeft}
          title="Voltar para o login"
          to="/" />
      </Form>
      <Background />
    </Container>
  )
}