import { Input } from "./components/Input";
import { FiSearch } from 'react-icons/fi';
import { Header } from "./components/Header";
import { Button } from "./components/Button";
import { TextButton } from "./components/TextButton";
import { FiArrowLeft } from 'react-icons/fi';


export default function App() {
  return (
    <>
      <Header />
      <Input
        icon={FiSearch}
        placeholder="Título" />
      <Button title="Entrar" />
      <TextButton icon={FiArrowLeft} title="Entrar" />
    </>
  )
}