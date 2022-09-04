import React from 'react'
import './summoner.css'

interface Props{
    placement: number
}

export const SummonerLastSquare:React.FC<Props> = ({placement}) => {
    let variant: string = "bottom"
    switch(placement){
        case 1:
            variant = "first";
            break;
        case 2:
            variant = "second";
            break;
        case 3:
            variant = "third";
            break;
        case 4:
            variant = "fourth";
            break;
        default:
            variant = "bottom"
            break;
    }
    return (
        <div className={`summoner-last-square ${variant}`}>
            <h4>{placement}</h4>
        </div>
    )
}

export default SummonerLastSquare
