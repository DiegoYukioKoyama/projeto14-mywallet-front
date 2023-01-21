import { useContext, useState } from "react";
import { Container, Form } from "./styled";
import apiEntry from "../../Services/apiEntries";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../Contexts/UserContext";

export default function NovaSaida(){

    const {user} = useContext(UserContext)
    const navigate = useNavigate()
    const [form, setForm] = useState({
        price: "",
        description: ""
    })

    function handleForm(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    }

    function handleNovaSaida(e) {
        apiEntry.novaSaida(form, user.token)
            .then(resp => {
                navigate("/home")
            })
            .catch(err => {
                if (!user.token) {
                    alert("Faça login")
                } else {
                    alert(err.response.data.message)
                }
            })
    }

    return (
        <Container>
            <h1>Nova saída</h1>
            <Form onSubmit={handleNovaSaida}>
                <input type="number" onChange={handleForm} value={form.price} required step="0.01" name="price" min="0.01" placeholder="Valor" />
                <input type="text" onChange={handleForm} value={form.description} required name="description" placeholder="Descrição" />
                <button type="submit">Salvar entrada</button>
            </Form>
        </Container>
    )
}