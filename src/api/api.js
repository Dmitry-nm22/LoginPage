import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://dry-forest-56016.herokuapp.com/auth/'
})

export const authAPI = {
    me() {
        return instance.post(`login`)
    }
}