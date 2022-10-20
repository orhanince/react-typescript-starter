import {AppAxiosInstance} from "../utils/request";
import {IPost} from "../models/IPost";
import {AxiosResponse} from "axios";

/**
 * Post api object with request functions
 */
const Posts  = {
    getPosts: (): Promise<AxiosResponse> => AppAxiosInstance.get<IPost[]>("/posts")
}

export default Posts;