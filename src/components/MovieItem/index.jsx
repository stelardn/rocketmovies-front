import { Container } from "./styles";

import { Rating } from "../../components/Rating";
import { Tag } from "../../components/Tag";

export function MovieNote({ data, ...rest }) {
  return (
    <Container>
      <h3>{data.title}</h3>
      <Rating rating={data.rating} />
      <p>{data.description}</p>
      {
        data.tags &&
        <footer>
          {data.tags.map(tag =>
            <Tag title={tag.name} key={tag.id} />
          )}
        </footer>
      }
    </Container>
  )
}