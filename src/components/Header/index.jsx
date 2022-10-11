import { Container, Avatar } from "./styles";

import { Input } from "../Input";
import { TextButton } from "../TextButton";

import { authUse } from "../../hooks/auth";

import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";

export function Header({ onChange }) {

  const { signOut } = authUse();
  const navigate = useNavigate();

  function handleSignOut() {
    signOut();
    navigate("/");
  }

  return (
    <Container>
      <Link to="/">RocketMovies</Link>
      <Input
        placeholder="Pesquise pelo título"
        onChange={onChange}
      />
      <Avatar>
        <p>
          <strong>
            <Link to="/profile">
              Stéfany Larissa
            </Link>
          </strong>
          <button
            onClick={handleSignOut}
          >
            Sair
          </button>
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