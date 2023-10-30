import axios from "axios"

export const ApiGet = async (url) => {
    return await axios.get(`http://localhost:4000/api${url}`)
    .then(res => res.data)
}