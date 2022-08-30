import React, {useState} from 'react';
import './comp.css';
import CompFoot from './CompFoot';
import Unit from '../unit/Unit';
import Trait from '../trait/Trait';
import chevron from '../../images/icons/chevron.svg';
import HexagonUnit from '../unit/HexagonUnit';
import { positioning } from '../../sample-comp-data';
import CompButton from '../buttons/CompButton';

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

interface UnitHex {
    id: number | null;
    name: string | null;
    cost: number | null;
    url: string | null;
    isLevel3: boolean | null;
    items: Item[] | null;
}
class UnitHex {
    id: number | null;
    name: string | null;
    cost: number | null;
    url: string | null;
    isLevel3: boolean | null;
    items: Item[] | null;

    constructor(id: number | null, name: string | null, cost: number | null, url: string | null, isLevel3: boolean | null, items: Item[] | null) {
        this.id = id;
        this.name = name;
        this.cost = cost;
        this.url = url;
        this.isLevel3 = isLevel3;
        this.items = items;
    }
}

interface Props{
    units: Unit[]
    traits: Trait[]
    avgPlacement: number
    top4Ratio: number
    winrate: number
    playrate: number
    positioning: UnitHex[][] 
}

export const Comp: React.FC<Props> = ({units, traits, avgPlacement, top4Ratio, winrate, playrate}) => {
    const[selected, setSelected] = useState("Positioning");

    function handleClick(text: string): void{
        setSelected(text)
    }

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
            <div className="comp-navigation">
                <CompButton 
                    text="Positioning"
                    isSelected={selected === "Positioning"}
                    position="left"
                    fn={handleClick}
                    />
                <CompButton 
                    text="Items"
                    isSelected={selected === "Items"}
                    position="middle"
                    fn={handleClick}
                    />
                <CompButton 
                    text="Augments"
                    isSelected={selected === "Augments"}
                    position="middle"
                    fn={handleClick}
                    />
                <CompButton 
                    text="Variations"
                    isSelected={selected === "Variations"}
                    position="right"
                    fn={handleClick}
                    />
            </div>
            <div className="comp-positioning-container">
                {positioning.map((array) => {
                    return <div className="comp-positioning-row">
                                {array.map((element) => {
                                    return <HexagonUnit 
                                                id={element.id}
                                                name={element.name}
                                                cost={element.cost}
                                                url={element.url}
                                                size="big"
                                                isLevel3={element.isLevel3}
                                                items={element.items}
                                                />
                                })}
                            </div>
                })}
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
