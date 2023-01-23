import styled from "styled-components"

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #8C11BE;
`

export const ContainerTitulo = styled.div`
    h1 {
        position: absolute;
        width: 141px;
        height: 31px;
        left: 24px;
        top: 25px;
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 26px;
        color: #FFFFFF;
    }
    img {
        position: absolute;
        width: 23px;
        height: 24px;
        right: 24px;
        top: 28px;
        color: #FFFFFF;
    }
`

export const ContainerRegistos = styled.div`
    position: absolute;
    width: 326px;
    height: 446px;
    left: 25px;
    top: 78px;
    background: #FFFFFF;
    border-radius: 5px;
    box-sizing: border-box;
    span {
        position: absolute;
        width: 180px;
        height: 46px;
        left: 73px;
        top: 200px;
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        text-align: center;
        color: #868686;
    }
`

export const ContainerEntradas = styled.div`
    display: flex;

`

export const ContainerNovaEntrada = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: absolute;
    width: 155px;
    height: 114px;
    left: 25px;
    top: 537px;
    background: #A328D6;
    border-radius: 5px;
    padding: 10px;
    box-sizing: border-box;
    ion-icon {
        width: 22px;
        height: 22px;
        color: #FFFFFF;
    }
    p {
        width: 64px;
        height: 40px;
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 17px;
        line-height: 20px;
        color: #FFFFFF;
    }
`

export const ContainerNovaSaida = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: absolute;
    width: 155px;
    height: 114px;
    left: 195px;
    top: 537px;
    background: #A328D6;
    border-radius: 5px;
    padding: 10px;
    box-sizing: border-box;
    ion-icon {
        width: 22px;
        height: 22px;
        color: #FFFFFF;
    }
    p {
        width: 64px;
        height: 40px;
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 17px;
        line-height: 20px;
        color: #FFFFFF;
    }
`

export const ItemExtrato = styled.div`
display: flex;
justify-content: space-between;
width: 326px;
padding-left: 12px;
margin-top: 23px;
box-sizing: border-box;
color: ${props => props.cor === "entry" ? "#03AC00" : "#C70000"};
`

export const Data = styled.p`
    width: 48px;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: #C6C6C6;
`

export const Descricao = styled.p`
    width: 145px;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: #000000;
`

export const Valor = styled.p`
    width: 62px;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
`

export const Saldo = styled.div`
    display: flex;
    justify-content: space-between;
    position: absolute;
    width: 298px;
    left: 5px;
    top: 395px;
    padding-left: 12px;
    margin-top: 23px;
    box-sizing: border-box;
    h1 {
        width: 57px;
        height: 20px;
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 17px;
        color: #000000;
    }
    h2 {
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
        font-size: 17px;
        line-height: 20px;
        color: ${props => props.corTotal > 0 ? "#C70000" : "#03AC00"};
    }
`