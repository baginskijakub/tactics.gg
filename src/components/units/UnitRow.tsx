import React from 'react'
import './units.css'
import {Trait} from '../trait/Trait'


interface Props{
    name: string
    id: string
    avgPlacement: number
    winrate: number
    playrate: number
    traits: {src: string, name: string}[]
    src: string

}

export const UnitRow:React.FC<Props> = ({name, id, avgPlacement, winrate, playrate, traits, src}) => {

    let isMobile  = window.innerWidth > 1050

        var colors: string[] = [];

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
    if (playrate < 5) {
        colors.push("body green");
    } else if (playrate < 15) {
        colors.push("body yellow");
    } else {
        colors.push("body red");
        }

    return (
        <div className="unit-row-wrapper">
            <div className="unit-row-unit">
                <img src={src} alt={name} title="Unit"/>
                <h4>{name}</h4>
            </div>
            {isMobile && <div className="unit-row-traits">
                { traits.map((trait:any) => {
                    return (
                        <Trait 
                            size="small"
                            hasValue={false}
                            hasLabel={true}
                            name={trait.name}
                            currentTrait={0}
                            traitStyle={0}
                            url={trait.src}
                            />
                    )
                })}
            </div>}
            <p className={colors[0]}>{avgPlacement}</p>
            <p className={colors[1]}>{winrate}%</p>
            <p className={colors[2]}>{playrate}%</p>
        </div>
    )
}
