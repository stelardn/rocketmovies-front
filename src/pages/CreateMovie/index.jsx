import { Container } from "./styles";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { api } from "../../services/api";

import { FiArrowLeft } from "react-icons/fi";

import { Header } from "../../components/Header";
import { TextButton } from "../../components/TextButton";
import { Input } from "../../components/Input";
import { TextArea } from "../../components/TextArea";
import { Button } from "../../components/Button";
import { TagItem } from "../../components/TagItem";
import { Tag } from "../../components/Tag";

export function CreateMovie() {
  const navigate = useNavigate();

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  const [title, setTitle] = useState("");
  const [rating, setRating] = useState(null);
  const [description, setDescription] = useState("");

  function handleAddTag(tag) {
    setTags(previousTags => [...previousTags, tag]);
    setNewTag("");
  }

  function handleRemoveTag(removedTag) {
    const filteredTags = tags.filter(tag => tag !== removedTag);
    setTags(filteredTags);
  }

  async function addNote() {
    try {
      const movieNote = {
        title,
        rating,
        description,
        tags
      }

      if (newTag) {
        return alert("Você preencheu uma tag, mas não a adicionou. Adicione-a ou deixe o campo em branco para prosseguir.")
      }

      const response = await api.post("/movie_notes", movieNote);
      navigate("/");

      alert("Nota criada com sucesso!");
    } catch (error) {
      if (error.response) {
        return alert(error.response.data.message);
      } else {
        return alert("Não foi possível adicionar a nota. Tente novamente.")
      }
    }
  }

  function handleRemoveNote() {
    const confirmDelete = confirm("Deseja mesmo limpar as informações?");

    if (confirmDelete) {
      setTitle("");
      setRating("");
      setDescription("");
      setTags([]);
      setNewTag("");
    }
  }

  function handleBack() {
    navigate(-1);
  }

  return (
    <Container>
      <Header />
      <main>
        <TextButton
          title="Voltar"
          icon={FiArrowLeft}
          onClick={handleBack}
        />
        <h2>Novo filme</h2>
        <form>
          <div className="first-line">
            <Input
              placeholder="Título"
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
            <Input
              value={rating}
              placeholder="Sua nota (de 1 a 5)"
              onChange={e => setRating(Number(e.target.value))}
            />
          </div>
          <TextArea
            value={description}
            placeholder="Observações"
            rows={6}
            onChange={e => setDescription(e.target.value)}
          />
        </form>
        <footer>
          <h3>Marcadores</h3>
          <div className="tags">
            {
              tags.map((tag, index) => (
                <TagItem
                  value={tag}
                  key={String(index)}
                  onClick={() => handleRemoveTag(tag)}
                />

              ))
            }
            <TagItem
              isNew
              placeholder="Novo marcador"
              value={newTag}
              onChange={e => setNewTag(e.target.value)}
              onClick={() => handleAddTag(newTag)}
            />
          </div>
          <div className="buttons">
            <Button
              title="Excluir filme"
              onClick={handleRemoveNote}
            />
            <Button
              title="Salvar alterações"
              onClick={addNote}
            />
          </div>
        </footer>
      </main>
    </Container>
  )
}