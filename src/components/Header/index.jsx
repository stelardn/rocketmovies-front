import { Container, Avatar } from "./styles";
import { Input } from "../Input";

export function Header() {
  return (
    <Container>
      <h2>RocketMovies</h2>
      <Input placeholder="Pesquise pelo título" />
      <Avatar>
        <p>
          <strong>Stéfany Larissa</strong>
          <a>Sair</a>
        </p>
        <img
          alt="Imagem do usuário"
          src="https://github.com/stelardn.png"
        />
      </Avatar>
    </Container>
  )
}