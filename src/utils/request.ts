import BASE_URL from "../utils/url";
import axios from "axios";;


const instance = axios.create({
    baseURL: BASE_URL,
    timeout: 15000,
});


export {
    instance as AppAxiosInstance,
}