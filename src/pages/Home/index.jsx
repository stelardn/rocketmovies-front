import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { api } from "../../services/api";

import { authUse } from "../../hooks/auth";

import { Container } from "./styles";

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { MovieNote } from "../../components/MovieItem";

import { FiPlus } from "react-icons/fi";


export function Home() {

  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [notes, setNotes] = useState([]);

  // Ajustar menu para tags?
  const [tags, setTags] = useState("");

  function handleDetails(note_id) {
    navigate(`/preview/${note_id}`);
  }


  useEffect(() => {
    async function getNotesIndex() {
      const response = await api.get(`/movie_notes?title=${title}&tags=${tags}`);
      setNotes(response.data);
    }

    getNotesIndex();
  }, [title])

  return (
    <Container>
      <div className="top">
        <Header
          onChange={e => setTitle(e.target.value)}
        />
        <header>
          <h2>Meus filmes</h2>
          <Button title="Adicionar filme" icon={FiPlus} to="/create" />
        </header>
      </div>
      <main>
        <div className="list-scroll">
          {
            notes &&
            notes.map(note => (
              <MovieNote
                key={String(note.id)}
                data={note}
                onClick={() => handleDetails(note.id)}
              />
            ))
          }
        </div>
      </main>
    </Container>
  )
}