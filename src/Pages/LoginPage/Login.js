import { useState } from "react"
import { Link } from "react-router-dom"
import { Container, Form } from "./styled"

export default function Login() {

    const [form, setForm] = useState({
        email: "",
        password: ""
    })

    function handleForm(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    }

    return (
        <>
            <Container>
                <h1>MyWallet</h1>
                <Form>
                    <input type="email" onChange={handleForm} placeholder="Email" name="email" value={form.email} required />
                    <input type="password" onChange={handleForm} placeholder="Senha" name="password" value={form.password} required />
                    <button type="submit">Entrar</button>
                </Form>
                < Link to="/cadastro"><p>Primeira vez? Cadastre-se!</p></Link>
                
            </Container>
        </>
    )
}

