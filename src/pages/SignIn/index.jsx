import { Container } from "./styles";

import { Input } from '../../components/Input';
import { FiMail, FiLock } from 'react-icons/fi';


export function SignIn() {
  <Container>
    <header>
      <h1>RocketMovies</h1>
      <p>Aplicação para acompanhar tudo que assistir.</p>
    </header>
    <h3>Faça seu Login</h3>
    <Input icon={FiMail} placeholder="Email" />
    <Input icon={FiLock} placeholder="Password" type="password" />
  </Container>
}