import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { authUse } from "../../hooks/auth";
import { api } from "../../services/api";

import { Container, Avatar } from "./styles";

import { FiArrowLeft, FiCamera, FiUser, FiMail, FiLock } from "react-icons/fi";

import avatarPlaceholder from "../../assets/avatar_placeholder.svg";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { TextButton } from "../../components/TextButton";

export function Profile() {
  const { updateProfile, user } = authUse();
  const navigate = useNavigate();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [oldPassword, setOldPassword] = useState(null);
  const [newPassword, setNewPassword] = useState(null);


  const initialAvatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  // State that receives the file whose URL will be used for viewing the image and which will be sent in the form of the HTTP request
  const [avatarFile, setAvatarFile] = useState(null);

  // State that keeps the URL of the file, for image view
  const [avatarURL, setAvatarURL] = useState(initialAvatarURL);


  function handleUpdateAvatar(event) {
    const file = event.target.files[0];
    setAvatarFile(file);

    const newAvatarURL = URL.createObjectURL(file);
    setAvatarURL(newAvatarURL);
  }

  function handleUpdateProfile() {
    const userUpdate = {
      name,
      email,
      old_password: oldPassword,
      password: newPassword
    }

    const updatedUser = Object.assign(user, userUpdate);

    updateProfile({ user: updatedUser, avatarFile });
  }

  function handleBack() {
    navigate(-1);
  }

  return (
    <Container>
      <header>
        <TextButton
          title="Voltar"
          icon={FiArrowLeft}
          onClick={handleBack}
        />
      </header>
      <Avatar>
        <img
          src={avatarURL}
          alt="Imagem do usuário"
        />
        <label htmlFor="camera">
          <FiCamera />
        </label>
        <input
          id="camera"
          type="file"
          onChange={handleUpdateAvatar}
        />
      </Avatar>
      <form>
        <Input
          placeholder="Nome"
          icon={FiUser}
          onChange={e => setName(e.target.value)}
          value={name}
        />
        <Input
          placeholder="Email"
          icon={FiMail}
          onChange={e => setEmail(e.target.value)}
          value={email}
        />
        <Input
          placeholder="Senha atual"
          icon={FiLock}
          type="password"
          onChange={e => setOldPassword(e.target.value)}
        />
        <Input
          placeholder="Nova senha"
          type="password"
          icon={FiLock}
          onChange={e => setNewPassword(e.target.value)}
        />
        <Button
          title="Salvar"
          onClick={handleUpdateProfile}
        />
      </form>
    </Container>
  )
}