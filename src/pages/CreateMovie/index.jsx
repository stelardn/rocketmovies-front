import { Container } from "./styles";

import { useState, useEffect } from "react";

import { FiArrowLeft } from "react-icons/fi";

import { Header } from "../../components/Header";
import { TextButton } from "../../components/TextButton";
import { Input } from "../../components/Input";
import { TextArea } from "../../components/TextArea";
import { Button } from "../../components/Button";
import { TagItem } from "../../components/TagItem";
import { Tag } from "../../components/Tag";

export function CreateMovie() {
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  function handleAddTag(tag) {
    setTags(previousTags => [...previousTags, tag]);
    setNewTag("");
  }

  function handleRemoveTag(removedTag) {
    const filteredTags = tags.filter(tag => tag !== removedTag);
    setTags(filteredTags);
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
            <Input placeholder="Título" />
            <Input placeholder="Sua nota (de 0 a 5)" />
          </div>
          <TextArea placeholder="Observações" rows={6} />
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
            <Button title="Excluir filme" />
            <Button title="Salvar alterações" />
          </div>
        </footer>
      </main>
    </Container>
  )
}