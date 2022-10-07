import React from 'react'
import './augments.css'
import {Augment} from '../../classes'

interface Props{
    augment: Augment
}

export const AugmentRow:React.FC<Props> = ({augment}) => {

    var colors: string[] = [];

      if (augment.avgPlacement < 3.7) {
    colors.push("body green");
  } else if (augment.avgPlacement < 4.6) {
    colors.push("body yellow");
  } else {
    colors.push("body red");
  }

  //setting color of winrate
  if (augment.winrate > 15) {
    colors.push("body green");
  } else if (augment.winrate > 11) {
    colors.push("body yellow");
  } else {
    colors.push("body red");
  }

  //setting color of playrate
  if (augment.frequency < 0.5) {
    colors.push("body red");
  } else if (augment.frequency < 0.8) {
    colors.push("body yellow");
  } else {
    colors.push("body green");
  }

    return (
        <div className="augment-row-wrapper">
            <div className="augment-row-inner">
                <img src={augment.src} alt={augment.name} loading="lazy" title="Augment"/>
                 <h4>{augment.name}</h4>
            </div>
            <p className={colors[0]}>{augment.avgPlacement}</p>
            <p className={colors[1]}>{augment.winrate}%</p>
            <p className={colors[2]}>{augment.frequency}%</p>
        </div>
    )
}

export default AugmentRow
