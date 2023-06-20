import axios from 'axios'

const API = axios.create({
    baseURL: 'http://127.0.0.1:8000/tasks/api/v1/tasks/'
})

export const getTasks = () =>{
    return API.get('/')
}

export const createTasks = (task) =>{
    return API.post('/', task)
}

export const deleteTasks = (id) =>{
    return API.delete(`/${id}`)
}

export const updateTasks = (id, task) =>{
    return API.put(`/${id}/`, task)
}

export const getTask = (id) =>{
    return API.get(`/${id}`)
}