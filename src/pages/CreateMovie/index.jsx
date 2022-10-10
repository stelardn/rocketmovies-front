import { Container } from "./styles";

import { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

import { FiArrowLeft } from "react-icons/fi";

import { Header } from "../../components/Header";
import { TextButton } from "../../components/TextButton";
import { Input } from "../../components/Input";
import { TextArea } from "../../components/TextArea";
import { Button } from "../../components/Button";
import { TagItem } from "../../components/TagItem";
import { Tag } from "../../components/Tag";

import { api } from "../../services/api";

export function CreateMovie() {
  const navigate = useNavigate();

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  const [title, setTitle] = useState("");
  const [rating, setRating] = useState(5);
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

  return (
    <Container>
      <Header />
      <main>
        <TextButton
          title="Voltar"
          icon={FiArrowLeft}
          to='/'
        />
        <h2>Novo filme</h2>
        <form>
          <div className="first-line">
            <Input
              placeholder="Título"
              onChange={e => setTitle(e.target.value)}
            />
            <Input
              placeholder="Sua nota (de 0 a 5)"
              onChange={e => setRating(Number(e.target.value))}
            />
          </div>
          <TextArea
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