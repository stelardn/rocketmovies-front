import { Container, Avatar } from "./styles";

import { Input } from "../Input";
import { TextButton } from "../TextButton";

import { authUse } from "../../hooks/auth";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { Link } from "react-router-dom";

import { api } from "../../services/api";

import avatarPlaceholder from "../../assets/avatar_placeholder.svg";

export function Header({ onChange }) {

  const { signOut, user } = authUse();
  const navigate = useNavigate();

  const [avatarURL, setAvatarURL] = useState(user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder);

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
              {user.name}
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
            alt={`Imagem de ${user.name}`}
            src={avatarURL}
          />
        </Link>
      </Avatar>
    </Container>
  )
}