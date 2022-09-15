import React, {useState} from 'react'
import star from '../../images/icons/star.svg';
import starHover from '../../images/icons/star-hover.svg'
import '../unit/unit.css';
import './builder.css'

interface Item{
    id: number;
    name: string;
    url: string;
}

interface Props{
    id: number | null;
    name: string | null;
    cost: number | null;
    url: string | null;
    size: "big" | "medium";
    level: 0 | 1 | 2 | 3;
    items: Item[] | null;
    row: number;
    column: number;
    changeStarLevel?: (level: 0 | 1 | 2| 3) => void
}

export const HexUnit: React.FC<Props> = ({id, name, cost, url, size, level, items, row, column, changeStarLevel}) => {

    const[starsState, setStars] = useState(level)

    function changeLevel(level: 0 | 1 | 2 | 3){
        setStars(level);
        changeStarLevel?.(level);
    }

    

    var backgroundClass: string = "hexagon-in2";

    switch(cost){
        case 1:
            backgroundClass += " grey-fill";
            break;
        case 2:
            backgroundClass += " green-fill";
            break;
        case 3:
            backgroundClass += " blue-fill";
            break;
        case 4:
        case 8:
            backgroundClass += " purple-fill";
            break;
        case 5:
        case 10:
            backgroundClass += " yellow-fill";
            break;
    }
    const stars = new  Array<number>();

    for(let i = 0; i<level; i++){
        stars.push(0)
    }

    if(size === "big")
    {
    return (
        <div className="unit-hex-container">
            <div className="star-container">
                    {    
                        stars.map(() => {
                            return(
                                <img src={star} alt="star"/>
                            )
                        })
                    }
            </div>
            <div className="hexagon hex-image">
                <div className="hexagon-in1">
                    <div className="hexagon-in2" style={{backgroundImage: `url(${url})`}} ></div>
                </div>
            </div>
            <div className="hexagon hex-border">
                <div className="hexagon-in1">
                    <div className={backgroundClass}></div>
                </div>
            </div>

            <div className="item-container">
                    {items !== null && items.map((itemElement) => (
                        <img src={itemElement.url} alt={itemElement.name}/>
                    ))}
            </div>
        </div>
    )
    }
    else{
        if(name !== null){
            return(
                <div className="unit-hex-container-medium droppable" >
                <div className="star-container">
                    {starsState > 0 ? <img src={star} alt="star" onClick={() => changeLevel(0)}/> : <img className="start-not-active" src={starHover} alt="star" onClick={() => changeLevel(1)}/>}
                    {starsState > 1 ? <img src={star} alt="star" onClick={() => changeLevel(2)}/> : <img className="start-not-active" src={starHover} alt="star" onClick={() => changeLevel(2)}/>}
                    {starsState > 2 ? <img src={star} alt="star" onClick={() => changeLevel(3)}/> : <img className="start-not-active" src={starHover} alt="star" onClick={() => changeLevel(3)}/>}
                </div>
                <div className="hexagon hex-border">
                    <div className="hexagon-in1">
                        <div className={backgroundClass}></div>
                    </div>
                </div>
                <div className="hexagon hex-image">
                    <div className="hexagon-in1">
                        <div className="hexagon-in2" style={{backgroundImage: `url(${url})`}}></div>
                    </div>
                </div>
                <div className="item-container">
                        {items !== null && items.map((itemElement) => (
                            <img src={itemElement.url} alt={itemElement.name}/>
                        ))}
                </div>
            </div>
            )
        }else{
            return(
                <div className="unit-hex-container-medium">
                <div className="star-container">
                        {    
                            stars.map(() => {
                                return(
                                    <img src={star} alt="star"/>
                                )
                            })
                        }
                </div>
                <div className="hexagon hex-border">
                    <div className="hexagon-in1">
                        <div className={backgroundClass}></div>
                    </div>
                </div>
                <div className="hexagon hex-image">
                    <div className="hexagon-in1">
                        <div className="hexagon-in2 droppable" style={{backgroundImage: `url(${url})`}} id={`${row}-${column}`}></div>
                    </div>
                </div>
                <div className="item-container">
                        {items !== null && items.map((itemElement) => (
                            <img src={itemElement.url} alt={itemElement.name}/>
                        ))}
                </div>
            </div>
            )
        }

    }
}

export default HexUnit
