import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Contatos from './components/contatos/Contatos';
import Empresa from './components/Empresa/Empresa';
import NavBar from './components/Navbar/Navbar';
function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route path='/' element= {<NavBar/>} >

          <Route index element={<Home/>}/>
          <Route path='empresa' element={<Empresa/>}/>
          <Route  path='contato' element={<Contatos/>}/>

          </Route>
        </Routes>
      </BrowserRouter>

      
    </div>
  );
}

export default App;
