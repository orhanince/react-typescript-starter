import axios, {AxiosResponse} from "axios";
import {IPOST} from "../types/IPOST";
import BASE_URL from "../utils/url";

const instance = axios.create({
    baseURL: BASE_URL,
    timeout: 15000,
});

const responseBody = (response: AxiosResponse) => response.data;

const postRequests = {
    get: (url: string) => instance.get<IPOST>(url).then(responseBody),
    post: (url: string, body: IPOST) => instance.post<IPOST>(url, body).then(responseBody),
    delete: (url: string) => instance.delete<IPOST>(url).then(responseBody),
};

const Posts  = {
    getPosts: (): Promise<IPOST[]> => postRequests.get('/posts')
}

export default Posts;