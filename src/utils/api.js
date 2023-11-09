import axios from "axios"

export const ApiGet = async (url, token) => {
    let isAuthNeeded = false
    if(token !== null && token !== undefined) {
        isAuthNeeded = true
    }
    if(isAuthNeeded) {
        let config = {
            headers: { Authorization: `Bearer ${token}` }
        }
        return await axios.get(`http://13.36.211.229:4000/api${url}`, config)
        .then(res => res.data)
        .catch(err => console.log(err))
    } else {
        return await axios.get(`http://13.36.211.229:4000/api${url}`)
        .then(res => res.data)
        .catch(err => console.log(err))
    }
}

export const ApiPost = async (url, body, token) => {
    let isAuthNeeded = false
    if(token !== null && token !== undefined) {
        isAuthNeeded = true
    }
    if(isAuthNeeded) {
        let config = {
            headers: { Authorization: `Bearer ${token}` }
        }
        return await axios.post(`http://13.36.211.229:4000/api${url}`, body, config)
        .then(res => { return res })
        .catch(err => console.log(err))
    } else {
        return await axios.post(`http://13.36.211.229:4000/api${url}`, body)
        .then(res => { return res })
        .catch(err => console.log(err))
    }
}

export const ApiDelete = async (url, token) => {
    let isAuthNeeded = false
    if(token !== null && token !== undefined) {
        isAuthNeeded = true
    }
    if(isAuthNeeded) {
        let config = {
            headers: { Authorization: `Bearer ${token}` }
        }
        return await axios.delete(`http://13.36.211.229:4000/api${url}`, config)
        .then(res => res.data)
        .catch(err => console.log(err))
    } else {
        return await axios.delete(`http://13.36.211.229:4000/api${url}`)
        .then(res => res.data)
        .catch(err => console.log(err))
    }
}

export const ApiPut = async (url, body, token) => {
    let isAuthNeeded = false
    if(token !== null && token !== undefined) {
        isAuthNeeded = true
    }
    if(isAuthNeeded) {
        let config = {
            headers: { Authorization: `Bearer ${token}` }
        }
        return await axios.patch(`http://13.36.211.229:4000/api${url}`, body, config)
        .then(res => res.data)
        .catch(err => console.log(err))
    } else {
        return await axios.patch(`http://13.36.211.229:4000/api${url}`, body)
        .then(res => res.data)
        .catch(err => console.log(err))
    }
}