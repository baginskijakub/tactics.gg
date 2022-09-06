import React from 'react'
import './comp.css'
import Unit from '../unit/Unit'
import Trait from '../trait/Trait'

interface TraitInterface{
    name: string;
    currentTrait: number;
    traitStyle: number;
    url: string;
}

interface UnitInterface{
    id: number;
    name: string;
    cost: number;
    url: string;
    level: 0 | 1 | 2 | 3;
    items: Item[] | null;
}

interface Item{
    id: number;
    name: string;
    url: string;
}

interface Props{
    avgPlacement: number   
    top4ratio: number
    units: UnitInterface[]
    traits: TraitInterface[]
}

export const CompVariationRow:React.FC<Props> = ({avgPlacement, top4ratio, units, traits}) => {
    let labeled = true;
    if(window.innerWidth < 800){
        labeled = false;
    }

    let avg: string = "Average Place"

    if(window.innerWidth < 500){
        avg = "Avg. Place"
    }
    
    return (
        <div className="comp-variation-container">
            <div className="comp-variation-stats">
                <div className="comp-variation-stat">
                    <p className="caption">{avg}</p>
                    <p className="caption">{avgPlacement}</p>
                </div>
                <div className="comp-variation-stat">
                    <p className="caption">Top4 Ratio</p>
                    <p className="caption">{top4ratio}</p>
                </div>
            </div>
            <div className="comp-variation-inner">
                <div className="comp-variation-traits">
                    {traits.map((element) => {
                        return(
                            <Trait 
                                size="small"
                                hasLabel={labeled}
                                hasValue={true}
                                name={element.name}
                                currentTrait={element.currentTrait}
                                traitStyle={element.traitStyle}
                                url={element.url}
                                />
                        )})}
                </div>
                <div className="comp-variation-units">
                    {units.map((element) => {
                            return(
                                <Unit
                                    size="medium"
                                    name={element.name}
                                    url={element.url}
                                    cost={element.cost}
                                    id={element.id}
                                    level={element.level}
                                    items={element.items}
                                    />
                            )})}
                </div>
            </div>
        </div>
    )
}

export default CompVariationRow
