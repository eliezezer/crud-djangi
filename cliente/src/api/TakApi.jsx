import axios from 'axios'
export const getAllTask=()=> {
    return axios.get('http://127.0.0.1:8000/task/api/v2/')
}