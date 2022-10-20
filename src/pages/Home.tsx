import React, {FC, ReactElement, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchPostsRequest} from "./../actions/post-action";
import {RootState} from "./../reducers/rootReducer";

/**
 * Home component.
 * @constructor
 * @return {ReactElement}
 */
const Home: FC = (): ReactElement => {
    const dispatch = useDispatch();
    const { pending, posts, error } = useSelector(
        (state: RootState) => state.posts
    );

    useEffect(() => {
        dispatch(fetchPostsRequest());
    }, []);

    return (
        <>
            {pending ? (
                <div>Loading...</div>
            ) : error ? (
                <div>Error</div>
            ) : (
                posts?.map((post, index) => (
                    <div key={post.id}>
                        {++index}. {post.title}
                    </div>
                ))
            )}

        </>
    )
}

export default Home;
