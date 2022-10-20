import React, { FC , ReactElement } from "react";
import {ButtonProps} from "../../types/component-types";
import './button.scss';

const Button: FC<ButtonProps> = (props: ButtonProps): ReactElement => {
    const  { buttonText } = props
    return (
        <div className={"button"}>
            {buttonText}
        </div>
    )
}

export default Button;