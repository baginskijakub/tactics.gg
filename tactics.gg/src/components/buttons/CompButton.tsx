import React from 'react'
import './buttons.css'

interface Props{
    text: string;
    isSelected: boolean;
    position: "left" | "right" | "middle";
    fn: (text: string) => void
}

export const CompButton:React.FC<Props> = ({text, isSelected, position, fn}) => {

    var borderRad: string = "4px 4px 0px 0px";
    var borderWid: string = "1px 1px 0px 1px";

    if(position === "left"){
        borderRad = "0px 4px 0px 0px";
        borderWid = "1px 1px 0px 0px";
    }
    else if(position === "right"){
        borderRad = "4px 0px 0px 0px";
        borderWid = "1px 0px 0px 1px";
    }

    return (
        <div className={isSelected ? 'comp-button-selected' : 'comp-button'} style={{borderRadius: borderRad, borderWidth: isSelected ? borderWid : "0px 0px 1px 0px"}} onClick={() => fn(text)}>
            <h4>{text}</h4>
        </div>
    )
}

export default CompButton
