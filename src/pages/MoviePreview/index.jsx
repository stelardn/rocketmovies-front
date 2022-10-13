import { Container } from "./styles";

import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { api } from "../../services/api";
import { authUse } from "../../hooks/auth";

import avatarPlaceholder from "../../assets/avatar_placeholder.svg";

import { Header } from "../../components/Header";
import { TextButton } from "../../components/TextButton";
import { Rating } from "../../components/Rating";
import { Tag } from "../../components/Tag";


import { FiArrowLeft, FiClock } from "react-icons/fi";

export function MoviePreview() {

  const params = useParams();
  const [details, setDetails] = useState();

  const { user } = authUse();
  const navigate = useNavigate();

  const [avatarURL, setAvatarURL] = useState(user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder);

  function handleBack() {
    navigate(-1);
  }

  useEffect(() => {
    async function fetchNoteDetails() {
      const response = await api.get(`/movie_notes/${params.id}`);
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
          <TextButton
            icon={FiArrowLeft}
            title="Voltar"
            onClick={handleBack}
          />
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
              Por {user.name}
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