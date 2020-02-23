import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://dry-forest-56016.herokuapp.com/auth/'
})

export const authAPI = {
    me(

    ) {
        return instance.post(`login`, {})
    }
}