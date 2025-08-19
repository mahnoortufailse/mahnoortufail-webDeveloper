import axios from "axios"

const axiosInstance = axios.create({
  baseURL: process.env.NODE_ENV === 'production' 
    ? process.env.NEXT_PUBLIC_VERCEL_URL 
      ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
      : '/api'
    : process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000',
})

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error.response?.data || error.message)
    return Promise.reject(error)
  },
)

export default axiosInstance
