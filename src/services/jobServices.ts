import api from "../utils/api"

export const getJobs = async () => {
    try {
        const response = await api.get("/api/recruitment/positions.json")
        return response.data
    } catch (error) {
        console.error("Error fetching jobs: ", error)
        throw error
    }
}

export const getJobById = async (id: string) => {
    try {
        const response = await api.get(`/api/recruitment/positions/${id}`)
        return response.data
    } catch (error) {
        console.error("Error fetching job detail: ", error)
        throw error
    }
}