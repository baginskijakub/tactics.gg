import React from 'react';
import './comp.css';
import CompFoot from './CompFoot';
import Unit from '../unit/Unit';
import Trait from '../trait/Trait';
import chevron from '../../images/icons/chevron.svg'

interface Trait{
    name: string;
    currentTrait: number;
    traitStyle: number;
    url: string;
}

interface Unit{
    id: number;
    name: string;
    cost: number;
    url: string;
    isLevel3: boolean;
    items: Item[] | null;
}

interface Item{
    id: number;
    name: string;
    url: string;
}

interface Props{
    units: Unit[]
    traits: Trait[]
    avgPlacement: number
    top4Ratio: number
    winrate: number
    playrate: number
}

export const Comp: React.FC<Props> = ({units, traits, avgPlacement, top4Ratio, winrate, playrate}) => {
    let labeled = window.innerWidth > 850;
    let size: "big" | "small"= "big"
    if(window.innerWidth < 850){
        size="small"
    }
    const traitList = traits.map((trait) =>
        <Trait 
            size={size}
            hasValue={true}
            hasLabel={labeled}
            name={trait.name}
            currentTrait={trait.currentTrait}
            traitStyle={trait.traitStyle}
            url={trait.url}
            />
    )

    const unitList = units.map((unit) => 
        <Unit 
            id={unit.id}
            name={unit.name}
            cost={unit.cost}
            url={unit.url}
            size="big"
            isLevel3={unit.isLevel3}
            items={unit.items}
            />
    )
    return (
        <div className="comp-wrapper">
            <div className="comp-head-container">
                <div className="comp-head-inner">
                    <div className="comp-traits">
                        {traitList}
                    </div>
                    <div className="comp-units">
                        {unitList}
                    </div>
                </div>
                <div className="expand-button">
                    <img src={chevron} alt="expand"></img>
                </div>
            </div>
            <CompFoot 
                avgPlacement={avgPlacement}
                top4Ratio={top4Ratio}
                winrate={winrate}
                playrate={playrate}
                />
        </div>
    )
}

export default Comp
