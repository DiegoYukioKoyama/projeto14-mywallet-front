import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Pages/LoginPage/Login';
import SignUp from './Pages/SignUpPage/SignUp';
import Home from "./Pages/HomePage/Home";
import NovaEntrada from './Pages/Nova-EntradaPage/NovaEntrada';
import NovaSaida from './Pages/Nova-SaidaPage/NovaSaida';
import { useState } from 'react';
import { UserContext } from './Contexts/UserContext';


export default function App() {

  const [user, setUser] = useState({})

  return (
    <BrowserRouter>
      <UserContext.Provider value={ {user, setUser} }>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cadastro" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
          <Route path="/nova-entrada" element={<NovaEntrada />} />
          <Route path="/nova-saida" element={<NovaSaida />} />
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
}


