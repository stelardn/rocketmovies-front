import { Container } from "./styles";
import { FiX, FiPlus } from "react-icons/fi";

export function TagItem({ value, onClick, isNew, ...rest }) {
  return (
    <Container isNew={isNew} >

      {isNew ? <input {...rest} type="text" value={value} /> : <p>{value}</p>}

      <button
        className={
          isNew ? "add-tag" : "remove-tag"
        }
        onClick={onClick}
      >
        {isNew ? <FiPlus /> : <FiX />}
      </button>

    </Container>
  )
}