import { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Form } from "./styled";


export default function SignUp(){

    const [form, setForm] = useState({ email: "", password: "", passwordConfirmation: "", name:"" })

    function handleForm(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    }

    return(
        <Container>
            <h1>MyWallet</h1>
            <Form>
                <input name="name" type="text" required value={form.name} placeholder="Nome" />
                <input name="email" type="email" required value={form.email} placeholder="E-mail" />
                <input name="password" type="password" required value={form.password} placeholder="Senha" />
                <input name="passwordConfirmation" type="password" required value={form.passwordConfirmation} placeholder="Confirme a senha" />
                <button type="submit">Cadastrar</button>
            </Form>
            <Link to="/"><p>Já tem uma conta? Entre agora!</p></Link>
        </Container>
    )
}