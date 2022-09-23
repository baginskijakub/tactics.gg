import React from 'react'
import {Augment} from '../../classes'
import './builder.css'

interface Props{
    augments: Augment[]
}
export const AnalysisAugments:React.FC<Props> = ({augments}) => {
    return (
        <div className="analysis-augments-wrapper">
            <div className="analysis-augments-titles">
                <p className="caption">Augment</p>
                <p className="caption">Average Placement</p>
                <p className="caption">Winrate</p>
                <p className="caption">Playrate</p>
            </div>
            <div className="analysis-augments-inner">
                {augments.map(augment => {
                    return(
                        <div className="analysis-augments-row">
                            <img src={augment.src} alt={augment.name}></img>
                            <p className="caption avg">{augment.avgPlacement}</p>
                            <p className="caption winrate">{augment.winrate}%</p>
                            <p className="caption freq">{augment.frequency}%</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default AnalysisAugments
