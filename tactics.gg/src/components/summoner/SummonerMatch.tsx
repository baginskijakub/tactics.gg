import React, {useState} from 'react'
import './summoner.css'
import Unit from '../unit/Unit'
import Trait from '../trait/Trait'
import chevron from '../../images/icons/chevron.svg'
import SummonerMatchRow from './SummonerMatchRow'


interface Item{
    id: number
    name: string
    url: string
}

interface TraitInterface{
    name: string;
    currentTrait: number;
    traitStyle: number;
    url: string;
}

interface UnitInterface {
    id: number;
    name: string;
    cost: number;
    url: string;
    level: 0 | 1 | 2 | 3;
    items: Item[] | null;
}

interface Companion{
    placement: number
    icon: string
    name: string
    roundEliminated: string
    augments: string[]
    traits: TraitInterface[]
    units: UnitInterface[]
    goldLeft: number
}

interface Props{
    placement: number
    queueType: "Ranked" | "Normal"
    timeAgo: string
    augments: string[]
    units: UnitInterface[]
    traits: TraitInterface[]
    companion: Companion[]
}

export const SummonerMatch:React.FC<Props> = ({placement, queueType, timeAgo, augments, units, traits, companion}) => {
    //false corresponds to closed, true to open
    let [state, setState] = useState(false)

    function handleOpen(){
        if(state === false){
            setState(true);
            document.getElementById("expand-image")!.style.transform = "rotate(0deg)";
        }
        else{
            setState(false);
            document.getElementById("expand-image")!.style.transform = "rotate(180deg)";
        }
    }

    let placementEnd: string = "th"
    let placementBar: string = "bottom-bar"
    if(placement === 1){
        placementEnd = "st"
        placementBar = "first"
    }
    else if(placement === 2){
        placementEnd = "nd"
        placementBar = "second"
    }
    else if(placement === 3){
        placementEnd = "rd"
        placementBar = "third"
    }
    else if(placement === 4){
        placementBar = "fourth"
    }
    let traitLabel: boolean = true
    if(window.innerWidth < 650){
        traitLabel = false
    }
    let isMobile: boolean = false
    if(window.innerWidth < 850){
        isMobile = true;
    }

    return (
        <div className="summoner-match-wrapper">
            <div className="summoner-match-head">
                <span className={`summoner-match-placement-bar ${placementBar}`}/>
                <div className="summoner-match-info-container">
                    <h3>{placement}{placementEnd}</h3>
                    {traitLabel && <div className="summoner-match-info-inner">
                        <p className="body-small">{queueType}</p>
                        <span className="summoner-match-info-separator"/>
                        <p className="body-small">{timeAgo}</p>
                    </div>}
                </div>
                <div className="summoner-match-augments">
                    {augments.map((element) => {
                        return <img src={element} alt="augment"/>
                    })}
                </div>
                <div className="summoner-match-board">
                    <div className="summoner-match-traits">
                        {traits.map((element) => {
                            return (
                                <Trait 
                                    size="small"
                                    hasLabel={traitLabel}
                                    hasValue={true}
                                    name={element.name}
                                    url={element.url}
                                    currentTrait={element.currentTrait}
                                    traitStyle={element.traitStyle}
                                    />
                            )
                        })}
                    </div>
                    <div className="summoner-match-units">
                        {units.map((element) => {
                            return (
                                <Unit
                                    size="medium"
                                    id={element.id}
                                    name={element.name}
                                    cost={element.cost}
                                    url={element.url}
                                    level={element.level}
                                    items={element.items}
                                    />
                            )
                        })}
                    </div>
                </div>
                <div className="summoner-expand-button" onClick={handleOpen}>
                    <img src={chevron} alt="chevron" id="expand-image"></img>
                </div>
            </div>
            {state && <div className="summoner-match-expanded">
                <div className="summoner-match-expanded-titles">
                    {!isMobile && <h5 className="summoner-match-titles-placement">Placement</h5>}
                    {!isMobile && <h5 className="summoner-match-titles-summoner">Summoner</h5>}
                    {!isMobile && <h5 className="summoner-match-titles-eliminated">Eliminated</h5>}
                    {!isMobile && <h5 className="summoner-match-titles-board">Board</h5>}
                    {!isMobile && <h5 className="summoner-match-titles-gold">Gold left</h5>}
                    {isMobile && <h5 className="summoner-match-titles-all">All players</h5>}
                </div>
            {companion.map((element) => {
                return (
                    <SummonerMatchRow 
                        placement={element.placement}
                        icon={element.icon}
                        name={element.name}
                        roundEliminated={element.roundEliminated}
                        augments={element.augments}
                        traits={element.traits}
                        units={element.units}
                        goldLeft={element.goldLeft}
                        />
                )
            })}
            </div>}
        </div>
    )
}

export default SummonerMatch
