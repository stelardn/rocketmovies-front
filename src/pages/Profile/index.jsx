import { useState } from "react";

import { Container, Avatar } from "./styles";

import { FiArrowLeft, FiCamera, FiUser, FiMail, FiLock } from "react-icons/fi";

import { authUse } from "../../hooks/auth";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { TextButton } from "../../components/TextButton";

export function Profile() {
  const { updateProfile, user } = authUse();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [oldPassword, setOldPassword] = useState(null);
  const [newPassword, setNewPassword] = useState(null);

  // continuar

  function handleUpdateAvatar(event) {
    const file = event.target.file[0];

    const imagePreview = URL.createObjectURL(file);
  }

  function handleUpdateProfile() {
    const userUpdate = {
      name,
      email,
      old_password: oldPassword,
      password: newPassword
    }

    const updatedUser = Object.assign(user, userUpdate);

    updateProfile(updatedUser);
  }

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