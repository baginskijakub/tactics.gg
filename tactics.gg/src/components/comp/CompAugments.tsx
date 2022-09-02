import React from 'react'
import './comp.css'
import CompAugmentsRow from './CompAugmentsRow'

interface Augment{
    src: string
    name: string
    avgPlacement: number
    winrate: number
    frequency: number
}

interface Props{
    augments: Augment[]
}

export const CompAugments:React.FC<Props> = ({augments}) => {
    let avg: string = "Average Place"

    if(window.innerWidth < 500){
        avg = "Avg. Place"
    }
    return (
        <div className="comp-augments-container">
            <div className="comp-augments-titles">
                <h4 className="comp-augments-title">Augment</h4>
                <h4 className="comp-augments-title-cell">{avg}</h4>
                <h4 className="comp-augments-title-cell">Winrate</h4>
                <h4 className="comp-augments-title-cell">Frequency</h4>
            </div>
            {augments.map((element) => {
                return (
                    <CompAugmentsRow 
                        src={element.src}
                        name={element.name}
                        avgPlacement={element.avgPlacement}
                        winrate={element.winrate}
                        frequency={element.frequency}
                        />
                )
            })}
            
        </div>
    )
}

export default CompAugments
