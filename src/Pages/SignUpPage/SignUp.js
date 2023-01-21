import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import apiAuth from "../../Services/apiAuth";
import { Container, Form } from "./styled";


export default function SignUp(){

    const [form, setForm] = useState({ email: "", password: "", passwordConfirmation: "", name:"" })
    const navigate = useNavigate()
    
    function handleForm(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    }

    function handleSignUp(e) {
        e.preventDefault()

        apiAuth.signUp(form)
        .then(res => {
            navigate("/")
        })
        .catch(err => {
            alert(err.response.data.message)
        })
    }

    return(
        <Container>
            <h1>MyWallet</h1>
            <Form onSubmit={handleSignUp}>
                <input type="text" name="name" value={form.name} onChange={handleForm} placeholder="Nome" required />
                <input type="email" name="email" value={form.email} onChange={handleForm} placeholder="E-mail" required />
                <input type="password" name="password" value={form.password} onChange={handleForm} placeholder="Senha" required />
                <input type="password" name="passwordConfirmation" value={form.passwordConfirmation} onChange={handleForm} placeholder="Confirme a senha" required />
                <button type="submit">Cadastrar</button>
            </Form>
            <Link to="/"><p>Já tem uma conta? Entre agora!</p></Link>
        </Container>
    )
}