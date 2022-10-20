/**
 * Button component props.
 * @property buttonText {string} - Button text
 */
export interface ButtonProps {
    buttonText: string;
}

/**
 * Card component props.
 * @property title {string} - Card main title.
 */
export type CardProps = {
    cardTitle: string;
    cardBody: string;
    cardImage: string;
}