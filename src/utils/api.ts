import axios from "axios"

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL || "https://dev5.dansmultipro.com",
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
    }
})

export default api