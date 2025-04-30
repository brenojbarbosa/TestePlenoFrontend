import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForms from "./LoginForms";
import Cadastro from "./Cadastro";
import TelaLogado from "./TelaLogado"
import GlobalStyle from  "../GlobalStyle"

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<LoginForms />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/logado" element={<TelaLogado />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
