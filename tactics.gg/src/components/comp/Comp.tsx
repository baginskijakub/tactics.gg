import React, {useState} from 'react';
import './comp.css';
import CompFoot from './CompFoot';
import Unit from '../unit/Unit';
import Trait from '../trait/Trait';
import chevron from '../../images/icons/chevron.svg';
import CompButton from '../buttons/CompButton';
import CompPositioning from './CompPositioning';
import CompItems from './CompItems';
import CompAugments from './CompAugments';
import CompVariations from './CompVariations'

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
    level: 0 | 1 | 2| 3;
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
    level: 0 | 1 | 2 | 3;
    items: Item[] | null;
}
class UnitHex {
    id: number | null;
    name: string | null;
    cost: number | null;
    url: string | null;
    level: 0 | 1 | 2 | 3;
    items: Item[] | null;

    constructor(id: number | null, name: string | null, cost: number | null, url: string | null, level: 0 | 1 | 2 | 3, items: Item[] | null) {
        this.id = id;
        this.name = name;
        this.cost = cost;
        this.url = url;
        this.level = level;
        this.items = items;
    }
}

interface UnitItems{
    unitName: string
    unitSrc: string
    cost: number
    itemsBIS: ItemUnit[]
    itemsRate: ItemUnit[]
}

interface ItemUnit{
    src: string
    name: string
    rate: number | null
}

interface Augment{
    src: string
    name: string
    avgPlacement: number
    winrate: number
    frequency: number
}

interface Variation{
    avgPlacement: number
    top4ratio: number
    units: UnitInterface[]
    traits: TraitInterface[]
}

interface Props{
    units: UnitInterface[]
    traits: TraitInterface[]
    avgPlacement: number
    top4Ratio: number
    winrate: number
    playrate: number
    positioning: UnitHex[][] 
    items: UnitItems[]
    augments: Augment[]
    variations: Variation[]
}

export const Comp: React.FC<Props> = ({units, traits, avgPlacement, top4Ratio, winrate, playrate, positioning, items, augments, variations}) => {
    const[selected, setSelected] = useState("Positioning");
    const[state, setState] = useState("closed");

    function handleClick(text: string): void{
        setSelected(text)
    }

    function handleState(){
        if(state === "open"){
            setState("closed")
            document.getElementById("expand-image")!.style.transform = "rotate(0deg)"
        }
        else{
            setState("open")
            document.getElementById("expand-image")!.style.transform = "rotate(180deg)"
        }       

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
            level={unit.level}
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
                <div className="expand-button" id="expand-image" onClick={handleState}>
                    <img src={chevron} alt="expand"></img>
                </div>
            </div>
            {state === "open" && <div>
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
            
            
                {selected === "Positioning" && <CompPositioning 
                    positioning={positioning}
                    />}
                {selected === "Items" && <CompItems
                    units={items}
                    />}
                {selected === "Augments" && <CompAugments
                    augments={augments}
                    />}
                {selected === "Variations" && <CompVariations
                    variations={variations}
                    />}
            </div>}
            
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
