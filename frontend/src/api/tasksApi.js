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