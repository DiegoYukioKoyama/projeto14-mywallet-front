import { Container, ContainerEntradas, ContainerNovaEntrada, ContainerNovaSaida, ContainerRegistos, ContainerTitulo, Data, Descricao, ItemExtrato, Saldo, Valor } from "./styled";
import logout from "../../assets/Vectorexit.png"
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../Contexts/UserContext";
import apiHome from "../../Services/apiHome";

export default function Home() {

    const { user } = useContext(UserContext)
    const navigate = useNavigate()
    const [entries, setEntries] = useState([])
    const total = entries.reduce((acc, entry) => {
        return entry.type === "entrada" ? acc + entry.value : acc - entry.value
    }, 0)

    useEffect(getEntries,[])

    function getEntries() {
        apiHome.getHome(user.token)
            .then(resp => {
                const apiEntries = resp.data
                setEntries(apiEntries)
            })
            .catch(err => {
                if (!user.token) {
                    alert("Faça login")
                } else {
                    alert(err.response.data.message)
                }

            })
    }

    function Logout(){
        const confirmation = window.confirm("Tem certeza que sair da sua conta?")
        if(confirmation){
            localStorage.clear()
            navigate("/")
        }
    }

    return (
        <Container>
            <ContainerTitulo>
                <h1>Olá, {user.name}</h1>
                <img onClick={Logout} src={logout} alt="Logout" />
            </ContainerTitulo>
            <ContainerRegistos>
                {entries.length < 1 ? (
                    <span>Não há registros de entrada ou saída</span>
                ) : (
                    entries.map((element) => (
                        <>
                            <ItemExtrato cor={element.type} corTotal={total}>
                                <Data>{element.date}</Data>
                                <Descricao>{element.description}</Descricao>
                                <Valor>{element.value.toFixed(2).replace(".", ",")}</Valor>
                            </ItemExtrato>
                            <Saldo>
                                <h1>SALDO</h1>
                                <h2>{total.toFixed(2).replace(".", ",")}</h2>
                            </Saldo>
                        </>
                    ))
                )}
            </ContainerRegistos>
            <ContainerEntradas>
                <Link to="/nova-entrada">
                    <ContainerNovaEntrada>
                        <ion-icon name="add-circle-outline"></ion-icon>
                        <p>Nova entrada</p>
                    </ContainerNovaEntrada>
                </Link>
                <Link to="/nova-saida">
                    <ContainerNovaSaida>
                        <ion-icon name="remove-circle-outline"></ion-icon>
                        <p>Nova saída</p>
                    </ContainerNovaSaida>
                </Link>
            </ContainerEntradas>
        </Container>
    )
}