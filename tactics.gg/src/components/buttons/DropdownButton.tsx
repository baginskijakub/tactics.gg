import React, {useState} from 'react';
import './buttons.css'


interface Props{
    text: string;
    src?: string;
    size: string;
    cost?: number;
    isSelected?: boolean;
    fn: (text: string) => void;
}

export const DropdownButton: React.FC<Props> = ({text, src, size, cost, isSelected, fn}) => {
    // const [selected, setSelected] = useState(isSelected);
    // function handleClick(){
    //     fn(text);
    //     setSelected(true);
    // }

    var color = "grey";
    switch(cost){
        case 1:
            color = "grey";
            break;
        case 2:
            color = "green"
            break;
        case 3:
            color = "blue"
            break;
        case 4:
        case 8:
            color = "purple"
            break;
        case 5:
        case 10:
            color = "yellow"
            break
    }


    if(src !== undefined)
    {
        return (
            <div onClick={()=>fn(text)} className="dropdown-icon" style={isSelected ? {backgroundColor: '#1E4C94'}:{}}>
                <img className={color} src={src} alt="unit"></img>
                <p className="body-small">{text}</p>
            </div>
        )
    }
    else if(size === "big")
    {
        return(
            <div onClick={()=>fn(text)} className="dropdown-big" style={isSelected ? {backgroundColor: '#1E4C94'}:{}}>
                <p className="body-small">{text}</p>
            </div>
        )
    }
    else
    {
        return(
            <div onClick={()=>fn(text)} className="dropdown-small" style={isSelected ? {backgroundColor: '#1E4C94'}:{}}>
                <p className="caption">{text}</p>
            </div>
        )
    }
}
