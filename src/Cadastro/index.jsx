import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Container, FormContainer, ButtonBack, H2, P, Label, Input, ButtonRegister, 
  Select, SelectContainer, ArrowIcon 
} from "./style";
import ModalCadastro from "../ModalCadastro"; 

function Cadastro() {
  const navigate = useNavigate();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [bio, setBio] = useState("");
  const [contato, setContato] = useState("");
  const [cargo, setCargo] = useState("");

  const [showModal, setShowModal] = useState(false); 
  const [modalTitle, setModalTitle] = useState(""); 
  const [modalMessage, setModalMessage] = useState(""); 
  const [isSuccess, setIsSuccess] = useState(false); 
  function handleCadastro() {

    if (!nome || !email || !senha || !confirmarSenha || !bio || !contato || !cargo) {
      setIsSuccess(false);
      setModalTitle("Ops! Algo deu errado");
      setModalMessage("Por favor, preencha todos os campos!");
      setShowModal(true);
      return;
    }


    if (senha !== confirmarSenha) {
      setIsSuccess(false);
      setModalTitle("Ops! Algo deu errado");
      setModalMessage("As senhas não coincidem!");
      setShowModal(true);
      return;
    }


    const user = { nome, email, senha, bio, contato, cargo };
    localStorage.setItem("user", JSON.stringify(user));

    setIsSuccess(true);
    setModalTitle("Conta criada com sucesso!");
    setModalMessage("Seu cadastro foi realizado com sucesso.");
    setShowModal(true);

  
    setTimeout(() => {
      setShowModal(false);
      navigate("/");
    }, 2000);
  }

  return (
    <Container>
      <FormContainer>
        <H2>Crie sua conta</H2>
        <P>Rápido e grátis, vamos nessa</P>

        <Label htmlFor="nome">Nome</Label>
        <Input id="nome" value={nome} onChange={e => setNome(e.target.value)} placeholder="Digite aqui seu nome" />

        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Digite aqui seu email" />

        <Label htmlFor="senha">Senha</Label>
        <Input id="senha" type="password" value={senha} onChange={e => setSenha(e.target.value)} placeholder="Digite sua senha" />

        <Label htmlFor="confirmarSenha">Confirmar Senha</Label>
        <Input id="confirmarSenha" type="password" value={confirmarSenha} onChange={e => setConfirmarSenha(e.target.value)} placeholder="Digite novamente a sua senha" />

        <Label htmlFor="bio">Bio</Label>
        <Input id="bio" value={bio} onChange={e => setBio(e.target.value)} placeholder="Fale sobre você" />

        <Label htmlFor="contato">Contato</Label>
        <Input id="contato" value={contato} onChange={e => setContato(e.target.value)} placeholder="Opção de contato" />

        <Label htmlFor="cargo">Selecione Cargo</Label>
        <SelectContainer>
          <Select id="cargo" value={cargo} onChange={e => setCargo(e.target.value)}>
            <option value="">Selecione</option>
            <option value="Desenvolvedor Front-End">Desenvolvedor Front-End</option>
            <option value="Desenvolvedor Back-End">Desenvolvedor Back-End</option>
            <option value="UI/UX Designer">UI/UX Designer</option>
          </Select>
          <ArrowIcon className="fas fa-chevron-down" />
        </SelectContainer>

        <ButtonRegister type="button" onClick={handleCadastro}>Cadastrar</ButtonRegister>
      </FormContainer>

     
      <ModalCadastro 
        show={showModal} 
        handleClose={() => setShowModal(false)} 
        title={modalTitle} 
        message={modalMessage} 
        isSuccess={isSuccess}
      />
    </Container>
  );
}

export default Cadastro;
