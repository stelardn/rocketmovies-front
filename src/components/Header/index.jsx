import { Container, Avatar } from "./styles";
import { Input } from "../Input";

import { Link } from "react-router-dom";

export function Header() {
  return (
    <Container>
      <Link to="/">RocketMovies</Link>
      <Input placeholder="Pesquise pelo título" />
      <Avatar>
        <p>
          <strong>
            <Link to="/profile">
              Stéfany Larissa
            </Link>
          </strong>
          <a>Sair</a>
        </p>
        <Link to="/profile">
          <img
            alt="Imagem do usuário"
            src="https://github.com/stelardn.png"
          />
        </Link>
      </Avatar>
    </Container>
  )
}