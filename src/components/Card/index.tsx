import React, { FC , ReactElement } from "react";
import {CardProps} from "../../types/component-types";

const Card: FC<CardProps> = (props: CardProps): ReactElement => {
    const  { title } = props;
    return (
        <>
            {title}
        </>
    )
}

export default Card;