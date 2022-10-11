import { Container } from "./styles";

import { Header } from "../../components/Header";
import { TextButton } from "../../components/TextButton";
import { Rating } from "../../components/Rating";
import { Tag } from "../../components/Tag";


import { FiArrowLeft, FiClock } from "react-icons/fi";
import { useParams } from "react-router-dom";
import { api } from "../../services/api";
import { useEffect, useState } from "react";
import { authUse } from "../../hooks/auth";

export function MoviePreview() {

  const params = useParams();
  const [details, setDetails] = useState();

  const { user } = authUse();

  const [avatarURL, setAvatarURL] = useState(`${api.defaults.baseURL}/files/${user.avatar}`);

  useEffect(() => {
    async function fetchNoteDetails() {
      const response = await api.get(`/movie_notes/${params.id}`);
      console.log(response.data);
      setDetails(response.data);
    }

    fetchNoteDetails();
  }, [])

  return (
    <Container>
      <Header />
      {
        details &&
        <main>
          <TextButton icon={FiArrowLeft} title="Voltar" to='/' />
          <div className="title">
            <h1>
              {details.title}
            </h1>
            <Rating
              rating={details.rating}
            />
          </div>
          <div className="info">
            <img src={avatarURL} />
            <p>
              {user.name}
            </p>
            <FiClock />
            <p>
              {details.updated_at}
            </p>
          </div>
          <div className="tags">
            {
              details.tags.map((tag, index) => (
                <Tag
                  title={tag}
                  key={String(index)}
                />
              ))
            }
          </div>
          <div className="description">
            <p>
              {details.description}
            </p>
          </div>
        </main>
      }

    </Container>
  )
}