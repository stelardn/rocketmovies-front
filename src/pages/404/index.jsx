import { Container } from "./styles";

import { TextButton } from '../../components/TextButton';

export function NotFound() {
  return (
    <Container>
      <h1>Ops... Não há nada aqui.</h1>
      <TextButton title="Voltar para o início" to='/' />
    </Container>
  )
}