import { Container } from "./styles";
import { FiX, FiPlus } from "react-icons/fi";

export function TagItem({ value, onClick, isNew, ...rest }) {
  return (
    <Container isNew={isNew} >
      <input
        {...rest}
        value={value}
        onClick={onClick}
        readOnly={!isNew}
      />
      <button
        className={
          isNew ? "add-tag" : "remove-tag"
        }
      >
        {isNew ? <FiPlus /> : <FiX />}
      </button>

    </Container>
  )
}