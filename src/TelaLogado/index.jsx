import { useNavigate } from "react-router-dom";
import {
  Nav,
  Logo,
  ButtonBack,
  ContainerHeader,
  H2Welcome,
  PCargo,
  H2Message,
  P,
  Container,
  ContainerBody,
} from "./style";

function TelaLogado() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLogged");
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <Container>
      <Nav>
        <Logo src="/logo.png" />
        <ButtonBack onClick={handleLogout}>Sair</ButtonBack>
      </Nav>

      <ContainerHeader>
        <H2Welcome>Olá, Teste Capys</H2Welcome>
        <PCargo>Desenvolver Front-End</PCargo>
      </ContainerHeader>

      <ContainerBody>
        <H2Message>Que pena! Estamos em desenvolvimento :(</H2Message>
        <P>
          Nossa aplicação está em desenvolvimento, em breve teremos novidades
        </P>
      </ContainerBody>
    </Container>
  );
}

export default TelaLogado;
