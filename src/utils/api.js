import axios from "axios"

export const ApiGet = async (url) => {
    return await axios.get(`http://localhost:4000/api${url}`)
    .then(res => res.data)
    .catch(err => console.log(err))
}

export const ApiPost = async (url, body) => {
    return await axios.post(`http://localhost:4000/api${url}`, body)
    .then(res => { return res })
    .catch(err => console.log(err))
}

export const ApiDelete = async (url) => {
    return await axios.delete(`http://localhost:4000/api${url}`)
    .then(res => res.data)
    .catch(err => console.log(err))
}

export const ApiPatch = async (url, body) => {
    return await axios.patch(`http://localhost:4000/api${url}`, body)
    .then(res => res.data)
    .catch(err => console.log(err))
}