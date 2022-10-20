import {AxiosResponse} from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import {
    fetchPostsFailure,
    fetchPostsSuccess
} from "./../../actions/post-action";
import { postTypes } from "./../../actions/post-action/type";
import Posts from "../../api/Posts";

const getPosts = () => Posts.getPosts()


function* fetchPostsSaga() {
    try {
        const response: AxiosResponse = yield call(getPosts)
        yield put(
            fetchPostsSuccess({
                posts: response.data
            })
        );
    } catch (e: any) {
        yield put(
            fetchPostsFailure({
                error: e.message
            })
        );
    }
}

function* postsSaga() {
    yield all([takeLatest(postTypes.FETCH_POST_REQUEST, fetchPostsSaga)]);
}

export default postsSaga;
