import {AppAxiosInstance, responseBody} from "../utils/request";
import {IPOST} from "../types/IPOST";
import {IComments} from "../types/IComments";

/**
 * Define post request with HTTP methods.
 */
const postRequests = {
    get: (url: string) => AppAxiosInstance.get<IPOST>(url).then(responseBody),
    post: (url: string, body: IPOST) => AppAxiosInstance.post<IPOST>(url, body).then(responseBody),
    delete: (url: string) => AppAxiosInstance.delete<IPOST>(url).then(responseBody),
};

/**
 * Post api object with request functions
 */
const Posts  = {
    getPosts: (): Promise<IPOST[]> => postRequests.get('/posts'),
    getComments: (): Promise<IComments[]> => postRequests.get('/comments'),
}

export default Posts;