import styled from "styled-components"

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #8C11BE;
    position: relative;
    h1 {
        font-family: 'Saira Stencil One';
        font-style: normal;
        font-weight: 400;
        font-size: 32px;
        color: #FFFFFF;
        position: absolute;
        top: 159px;
        left: 115px;
    }
    p {
        position: absolute;
        width: 191px;
        height: 18px;
        left: 92px;
        top: 457px;
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 15px;
        color: #FFFFFF;
    }
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    height: 188px;
    justify-content: space-between;
    position: absolute;
    top: 233px;
    left: 25px;
    input {
        width: 326px;
        height: 58px;
        border-radius: 5px;
        background-color: #FFFFFF;
        box-sizing: border-box;
        border: none;
        ::placeholder{
            width: 60px;
            height: 23px;
            font-family: 'Raleway';
            font-style: normal;
            font-weight: 400;
            font-size: 20px;
            padding-left: 15px;
            color: #000000;
        }
    }
    button {
        width: 326px;
        height: 46px;
        background-color: #A328D6;
        border-radius: 5px;
        box-sizing: border-box;
        border: none;
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        color: #FFFFFF;
    }
`