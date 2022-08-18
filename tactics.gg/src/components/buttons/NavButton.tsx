import React from 'react'
import './buttons.css'

interface Props{
    text: string;
    link: string;
    isSelected: boolean;
}

export const NavButton: React.FC<Props> = ({text, link, isSelected}) => {
    if(!isSelected)
    {
        return (
            <div className="navbutton">
                <a className="body" href={link}>{text}</a>
            </div>
        )
    }
    else{
        return(
            <div className="navbutton-selected">
                <a className="body" href={link}>{text}</a>
            </div>
        )
    }
}