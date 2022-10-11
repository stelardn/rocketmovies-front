import { Container } from "./styles";

import { Rating } from "../../components/Rating";
import { Tag } from "../../components/Tag";

export function MovieNote({ data, onClick, ...rest }) {
  return (
    <Container {...rest}>
      <a onClick={onClick}>{data.title}</a>
      <Rating rating={data.rating} />
      <p>{data.description}</p>
      {
        data.tags &&
        <footer>
          {data.tags.map((tag, index) =>
            <Tag title={tag} key={String(index)} />
          )}
        </footer>
      }
    </Container>
  )
}