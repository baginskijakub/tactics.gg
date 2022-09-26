import React from 'react'
import '../augments/augments.css'

interface Props{
    id: string
    name: string
    avgPlacement: number
    winrate: number
    playrate: number
}

export const ItemRow:React.FC<Props> = ({id, name, avgPlacement, winrate, playrate}) => {

    let colors: string[] = []
    if (avgPlacement < 3.7) {
    colors.push("body green");
  } else if (avgPlacement < 4.6) {
    colors.push("body yellow");
  } else {
    colors.push("body red");
  }

  //setting color of winrate
  if (winrate > 15) {
    colors.push("body green");
  } else if (winrate > 11) {
    colors.push("body yellow");
  } else {
    colors.push("body red");
  }

  //setting color of playrate
  if (playrate < 0.5) {
    colors.push("body green");
  } else if (playrate < 0.8) {
    colors.push("body yellow");
  } else {
    colors.push("body red");
  }

    return (
        <div className="augment-row-wrapper">
            <div className="augment-row-inner">
                <img className="item-row-image" src={`https://ittledul.sirv.com/Images/items/${id}.png`} alt={name}/>
                <p className="body">{name}</p>
            </div>
            <p className={colors[0]}>{avgPlacement}</p>
            <p className={colors[1]}>{winrate}%</p>
            <p className={colors[2]}>{playrate}%</p>
        </div>
    )
}

export default ItemRow
