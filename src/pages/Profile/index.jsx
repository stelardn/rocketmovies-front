import { Container, Avatar } from "./styles";

import { FiArrowLeft, FiCamera, FiUser, FiMail, FiLock } from "react-icons/fi";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { TextButton } from "../../components/TextButton";

export function Profile() {
  return (
    <Container>
      <header>
        <TextButton title="Voltar" icon={FiArrowLeft} to='/' />
      </header>
      <Avatar>
        <img src="https://github.com/stelardn.png" alt="Imagem do usuário" />
        <label htmlFor="camera">
          <FiCamera />
        </label>
        <input id="camera" type="file" />
      </Avatar>
      <form>
        <Input
          placeholder="Nome"
          icon={FiUser}
        />
        <Input
          placeholder="Email"
          icon={FiMail}
        />
        <Input
          placeholder="Senha atual"
          icon={FiLock}
        />
        <Input
          placeholder="Nova senha"
          icon={FiLock}
        />
        <Button title="Salvar" />
      </form>
    </Container>
  )
}