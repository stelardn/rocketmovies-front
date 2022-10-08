import { Container, Form, Background } from "./styles";

import { FiMail, FiUser, FiLock, FiArrowLeft } from 'react-icons/fi';

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { api } from '../../services/api';

import { Input } from '../../components/Input';
import { TextButton } from "../../components/TextButton";
import { Button } from "../../components/Button";

export function SignUp() {

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSignUp({ name, email, password }) {
    try {
      await api.post("/users", { name, email, password });
      alert("Usuário cadastrado com sucesso!");
      navigate("/");
    } catch (error) {
      if (error.response) {
        return alert(error.response.data.message);
      }

      return alert("Não foi possível completar o cadastro. Tente novamente.");
    }
  }

  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>
        <h3>Crie sua conta</h3>
        <Input
          icon={FiUser}
          placeholder="Nome"
          onChange={e => setName(e.target.value)}
        />
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
          title="Cadastrar"
          onClick={() => handleSignUp({ name, email, password })} />
        <TextButton
          icon={FiArrowLeft}
          title="Voltar para o login"
          to="/" />
      </Form>
      <Background />
    </Container>
  )
}