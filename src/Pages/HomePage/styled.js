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
`

export const ContainerEntradas = styled.div`
    display: flex;

`

export const ContainerNovaEntrada = styled.div`
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
    position: absolute;
    width: 155px;
    height: 114px;
    right: 25px;
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