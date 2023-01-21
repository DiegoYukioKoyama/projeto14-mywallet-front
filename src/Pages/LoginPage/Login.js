import { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { UserContext } from "../../Contexts/UserContext"
import apiAuth from "../../Services/apiAuth"
import { Container, Form } from "./styled"

export default function Login() {

    const { setUser } = useContext(UserContext)
    const navigate = useNavigate()
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

    function handleLogin(e) {
        e.preventDefault()

        apiAuth.login(form)
            .then(resp => {
                const { name, token } = resp.data
                setUser({ name, token })
                localStorage.setItem("user", JSON.stringify({ name, token }))
                navigate("/home")
            })
            .catch(err => alert(err.response.data.message))
    }

    return (
        <>
            <Container>
                <h1>MyWallet</h1>
                <Form onSubmit={handleLogin}>
                    <input type="email" name="email" value={form.email} onChange={handleForm} placeholder="Email" required />
                    <input type="password" name="password" value={form.password} onChange={handleForm} placeholder="Senha" required />
                    <button type="submit">Entrar</button>
                </Form>
                < Link to="/cadastro"><p>Primeira vez? Cadastre-se!</p></Link>

            </Container>
        </>
    )
}

