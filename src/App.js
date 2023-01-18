import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Pages/LoginPage/Login';
import SignUp from './Pages/SignUpPage/SignUp';
import Home from "./Pages/HomePage/Home";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}


