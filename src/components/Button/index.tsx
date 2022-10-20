import React, {FC, ReactElement, useState} from "react";
import {ButtonProps} from "../../types/component-types";
import './button.scss';
import Posts from "../../api/Posts";
import {IComments} from "../../types/IComments";


/**
 * Button component.
 * @param {Button} props
 * @constructor
 * @return {ReactElement}
 */
const Button: FC<ButtonProps> = (props: ButtonProps): ReactElement => {
    const [comments, setComments] = React.useState<IComments>([]);
    const  { buttonText } = props;
    const getComments = async (): Promise<void> => {
        let response: IComments[] = await Posts.getComments();
        console.log('response =>', typeof response);
        setComments(response);
    }
    return (
        <div className={"button"} onClick={() => getComments()}>
            {buttonText}
        </div>
    )
}

export default Button;