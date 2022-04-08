import Cookies from 'universal-cookie'

const cookies = new Cookies()

export const setAccessToken = (token) => {
    cookies.set("_jwt", token)
}

export const getAccessToken = () => {
    return cookies.get("_jwt")  
}