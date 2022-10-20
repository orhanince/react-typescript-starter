import React, {FC, ReactElement} from "react";
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
    const  { buttonText } = props;
    const getComments = async (): Promise<void> => {
        let response: IComments[] = await Posts.getComments();
        console.log('response =>',response);
    }
    return (
        <div className={"button"} onClick={() => getComments()}>
            {buttonText}
        </div>
    )
}

export default Button;