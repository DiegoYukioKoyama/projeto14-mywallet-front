import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../Contexts/UserContext";
import apiEntry from "../../Services/apiEntries";
import { Container, Form } from "./styled";


export default function NovaEntrada() {

    const [form, setForm] = useState({
        value: "",
        description: ""
    })

    const {user} = useContext(UserContext)
    const navigate = useNavigate(

    )
    function handleForm(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    }

    function handleNewEntry(e) {
        e.preventDefault()
        apiEntry.newEntry(form, user.token)
            .then(resp => {
                navigate("/home")
            })
            .catch(err => {
                if (!user.token) {
                    alert("Faça login")
                } else {
                    alert("Não foi possível adicionar uma nova entrada")
                }
            })
    }

    return (
        <Container>
            <h1>Nova entrada</h1>
            <Form onSubmit={handleNewEntry}>
                <input type="number" name="value" value={form.value} step="0.01" min="0.01" onChange={handleForm} placeholder="Valor" required />
                <input type="text" name="description" value={form.description} onChange={handleForm} placeholder="Descrição" />
                <button type="submit">Salvar entrada</button>
            </Form>
        </Container>
    )
}