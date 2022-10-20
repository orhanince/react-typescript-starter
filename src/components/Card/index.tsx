import React, { FC , ReactElement } from "react";
import {CardProps} from "../../types/component-types";
import {stringShortener} from "../../utils/helper";

const Card: FC<CardProps> = (props: CardProps): ReactElement => {
    const  { cardImage, cardTitle, cardBody } = props;
    return (
        <>
            {cardImage}
            {cardTitle}
            {stringShortener(cardBody)}
        </>
    )
}

export default Card;