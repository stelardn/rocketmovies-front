import { Container } from "./styles";

import { TextButton } from '../../components/TextButton';

export function NotFound() {
  return (
    <Container>
      <h1>Página não encontrada.</h1>
      <h3>Não há nada aqui.</h3>
      <TextButton title="Voltar para o início" to='/' />
    </Container>
  )
}