import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Pages/LoginPage/Login';
import SignUp from './Pages/SignUpPage/SignUp';
import Home from "./Pages/HomePage/Home";
import NovaEntrada from './Pages/Nova-EntradaPage/NovaEntrada';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/nova-entrada" element={<NovaEntrada />} />
      </Routes>
    </BrowserRouter>
  );
}


