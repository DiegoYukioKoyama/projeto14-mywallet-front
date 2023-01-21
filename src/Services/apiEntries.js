import axios from "axios";

function createConfig(token) {
    return {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
}

function newEntry(body, token) {
    const promise = axios.post(`${process.env.REACT_APP_API_URL}/nova-entrada`, body, createConfig(token))
    return promise
}

function novaSaida(body, token) {
    const promise = axios.post(`${process.env.REACT_APP_API_URL}/nova-entrada`, body, createConfig(token))
    return promise
}

const apiEntry = { newEntry, novaSaida }
export default apiEntry