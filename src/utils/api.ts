import axios from "axios"

const config = {
  baseURL: 'https://laughing-capybara-rqqqjrpx477cx7q6-3000.app.github.dev/',
}

export const api = axios.create(config)