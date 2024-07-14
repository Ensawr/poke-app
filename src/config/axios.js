import axios from 'axios'

export const unauthorized = axios.create({
    baseURL: process.env.REACT_APP_API_ENDPOINT,
    timeout: 8000,
})