import { Container, ContainerEntradas, ContainerNovaEntrada, ContainerNovaSaida, ContainerRegistos, ContainerTitulo } from "./styled";
import exit from "../../assets/Vectorexit.png"
import { useState } from "react";

export default function Home() {

    const [registro, setRegistro] = useState("")

    function listaAtividades() {
        if (registro === "") {
            return "Não há registros de entrada ou saída"
        } else {
            return registro
        }
    }

    return (
        <Container>
            <ContainerTitulo>
                <h1>Olá, Fulano</h1>
                <img src={exit} alt="exit" />
            </ContainerTitulo>
            <ContainerRegistos>

            </ContainerRegistos>
            <ContainerEntradas>
                <ContainerNovaEntrada>
                    <ion-icon name="add-circle-outline"></ion-icon>
                    <p>Nova entrada</p>
                </ContainerNovaEntrada>
                <ContainerNovaSaida>
                    <ion-icon name="remove-circle-outline"></ion-icon>
                    <p>Nova saída</p>
                </ContainerNovaSaida>
            </ContainerEntradas>
        </Container>
    )
}