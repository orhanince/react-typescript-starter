import React, { FC , ReactElement } from "react";
import {CardProps} from "../../types/component-types";

const Card: FC<CardProps> = (props: CardProps): ReactElement => {
    const  { cardImage, cardTitle, cardBody } = props;
    return (
        <>
            {cardImage}
            {cardTitle}
            {cardBody}
        </>
    )
}

export default Card;