import React from 'react'
import "./buttons.css"

interface Props{
    text: string;
    fn?: () => void;
}

export const PrimaryButton: React.FC<Props> = ({text, fn}) => {
    return (
        <div className="primary-button">
            <p className="body">{text}</p>
        </div>
    )
}