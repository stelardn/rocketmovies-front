import { Container } from "./styles";

import { FiArrowLeft } from "react-icons/fi";

import { Header } from "../../components/Header";
import { TextButton } from "../../components/TextButton";
import { Input } from "../../components/Input";
import { TextArea } from "../../components/TextArea";
import { Button } from "../../components/Button";
import { TagItem } from "../../components/TagItem";
import { Tag } from "../../components/Tag";

export function CreateMovie() {
  return (
    <Container>
      <Header />
      <main>
        <TextButton title="Voltar" icon={FiArrowLeft} />
        <h2>Novo filme</h2>
        <form>
          <Input placeholder="Título" />
          <Input placeholder="Sua nota (de 0 a 5)" />
          <TextArea placeholder="Observações" rows={6} />
        </form>
        <footer>
          <p>Marcadores</p>
          <div className="tags">
            <TagItem value="React" />
            <TagItem placeholder="Novo marcador" isNew />
          </div>
        </footer>
      </main>
    </Container>
  )
}