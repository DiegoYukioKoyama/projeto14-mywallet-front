import { useState } from "react";
import { Container, Form } from "./styled";


export default function NovaSaida(){

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

    return (
        <Container>
            <h1>Nova saída</h1>
            <Form>
                <input type="number" onChange={handleForm} value={form.price} required step="0.01" name="price" min="0.01" placeholder="Valor" />
                <input type="text" onChange={handleForm} value={form.description} required name="description" placeholder="Descrição" />
                <button type="submit">Salvar entrada</button>
            </Form>
        </Container>
    )
}