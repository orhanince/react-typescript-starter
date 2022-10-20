import React, { FC , ReactElement } from "react";
import {ButtonProps} from "../../types/component-types";
import Posts from "../../api/Posts";
import {IPOST} from "../../types/IPOST";



const Button: FC<ButtonProps> = (props: ButtonProps): ReactElement => {
    const [posts, setPosts] = React.useState<IPOST[]>([]);
    const  { buttonText } = props;
    React.useEffect( () => {
        Posts.getPosts().then( data => {
            setPosts(data);
        }).catch(err => {
            console.log(new Error('Error occurred while retrieving data from the url!'));
        });
    },[]);


    return (
        <>
            {posts.map(item => {
                return (
                   <div key={item.id}>
                       {item.userId}
                       {item.id}
                       {item.title}
                       {item.body}
                   </div>
                )
            })}
            {buttonText}
        </>
    )
}

export default Button;