import "./index.css";

import { SearchInput } from "./components/SearchInput";
import { List } from "./components/List";
import { ListaFuncionarios } from "./pages/ListaFuncionarios";
import { ListaCarros } from "./pages/ListaCarros";
import { CadastroCarro } from "./pages/CadastroCarro";
import { CadastroFuncionario } from "./pages/CadastroFuncionario";

function App() {
  return (
    <div className="App">
      <CadastroFuncionario />
    </div>
  );
}

export default App;
