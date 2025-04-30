import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import {
  LoginContainer,
  Input,
  Button,
  H3,
  Label,
  P,
  WrapperText,
  LogoContainer,
  Logo
} from "./style";

function LoginForms() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState(""); 

 
  function handleLogin() {
    const user = JSON.parse(localStorage.getItem("user") || "{}");

    if (user.email === email && user.senha === senha) { 
      alert("Login realizado com sucesso!");
      localStorage.setItem("isLogged", "true");
      navigate("/logado"); 
    } else {
      alert("Email ou senha incorretos!"); 
    }
  }


  function handleCadastro() {
    navigate("/cadastro"); 
  }

  return (
    <>
      <LogoContainer>
        <Logo src="/logo.png" />
      </LogoContainer>

      <LoginContainer>
        <H3>Login</H3>

    
        <Label htmlFor="email">Email</Label>
        <Input
          type="email"
          id="email"
          placeholder="teste@capys.com.br"
          value={email}
          onChange={(e) => setEmail(e.target.value)} 
        />

        <Label htmlFor="senha">Senha</Label>
        <Input
          type="password"
          id="senha"
          placeholder="********"
          value={senha}
          onChange={(e) => setSenha(e.target.value)} 
        />

        <Button
          type="button"
          style={{ backgroundColor: "#8B1D07" }}
          onClick={handleLogin} 
        >
          Entrar
        </Button>

        <WrapperText>
          <P>Ainda não possui uma conta?</P>
        </WrapperText>

        <Button
          type="button"
          style={{ backgroundColor: "#868e96" }}
          onClick={handleCadastro}
        >
          Cadastre-se
        </Button>
      </LoginContainer>
    </>
  );
}

export default LoginForms;
