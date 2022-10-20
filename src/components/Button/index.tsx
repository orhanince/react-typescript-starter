import React, {FC, ReactElement} from "react";
import {ButtonProps} from "../../types/component-type";
import './button.scss';


/**
 * Button component.
 * @param {Button} props
 * @constructor
 * @return {ReactElement}
 */
const Button: FC<ButtonProps> = (props: ButtonProps): ReactElement => {
    const  { buttonText } = props;
    return (
        <div className={"button"}>
            {buttonText}
        </div>
    )
}

export default Button;