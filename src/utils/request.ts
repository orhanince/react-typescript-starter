import BASE_URL from "../utils/url";
import axios, {AxiosResponse} from "axios";;


const instance = axios.create({
    baseURL: BASE_URL,
    timeout: 15000,
});

const responseBody = (response: AxiosResponse) => response.data;

export {
    instance as AppAxiosInstance,
    responseBody
}