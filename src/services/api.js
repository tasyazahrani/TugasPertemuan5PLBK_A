import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://fakestoreapi.com',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

apiClient.interceptors.request.use(
  (config) => {
    console.log(`[API] ${config.method.toUpperCase()} ${config.url}`)
    return config
  },
  (error) => Promise.reject(error)
)

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      console.error(`[API Error] ${error.response.status}`)
    }
    return Promise.reject(error)
  }
)

export const getProducts = async () => {
  const res = await apiClient.get('/products')
  return res.data
}

export const getProductById = async (id) => {
  const res = await apiClient.get(`/products/${id}`)
  return res.data
}

export const getCategories = async () => {
  const res = await apiClient.get('/products/categories')
  return res.data
}

export default apiClient