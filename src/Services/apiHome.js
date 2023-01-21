import axios from "axios";

function createConfig(token) {
    return {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
}

function getHome(token){
    const promisse = axios.get(`${process.env.REACT_APP_API_URL}/home`, createConfig(token))
    return promisse
}

const apiHome = { getHome }
export default apiHome