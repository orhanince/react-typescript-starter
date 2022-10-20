import React, { FC , ReactElement } from "react";
import {ButtonProps} from "../../types/component-types";

const Button: FC<ButtonProps> = (props: ButtonProps): ReactElement => {
    const  { buttonText } = props;
    return (
        <>
            {buttonText}
        </>
    )
}

export default Button;