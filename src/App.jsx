
import './App.css'
//1 - Import do Routes 
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/home'
import Senacx from './pages/senacx/senacx'
import Senacxadm from './pages/senacxadm/senacxadm'
import Usuarios from './pages/usuarios/usuarios'
import Dashboard from './pages/dashboard/dashboard'
import Competicoes from './pages/competicoes/competicoes'
import Avaliacao from './pages/avaliacao/avaliacao'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { Login } from './pages/login/login'
function App() {


  return (
    <div className='App '>


      <ToastContainer
        theme="colored"
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
      />
      {/* Este é um comentário em JSX */}
      {/* <MeuCard title={"Title Dinâmico"} descricao={"Descricao dinâmica"} conteudo={"Meu conteúdo Dinâmico"} /> */}
      {/*Configurando minhas Rotas   */}
      <BrowserRouter>

        <Routes>
          {/* Rota Login */}
          <Route path="/login" element={<Login />} />
          {/*Rota Home  */}
          <Route path="/" element={<Login />} />
          {/*Rota About  */}
          <Route path="/senacx" element={<Senacx />} />
          {/*Rota senacxAdm  */}
          <Route path="/senacxadm" element={<Senacxadm />} />
          {/*Rota Usuarios  */}
          <Route path="/usuarios" element={<Usuarios />} />
          {/*Rota Usuarios  */}
          <Route path="/dashboard" element={<Dashboard />} />
          {/*Rota Usuarios  */}
          <Route path="/competicoes" element={<Competicoes />} />
          {/*Rota Usuarios  */}
          <Route path="/avaliacao" element={<Avaliacao />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
