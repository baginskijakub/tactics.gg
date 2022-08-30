import React from 'react'
import star from '../../images/icons/star.svg';
import './unit.css';

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
    isLevel3: boolean | null;
    items: Item[] | null;
}

export const HexagonUnit: React.FC<Props> = ({id, name, cost, url, size, isLevel3, items}) => {
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
    if(size === "big")
    {
    return (
        <div className="unit-hex-container">
            <div className="star-container">
                    {isLevel3 && <img src={star} alt="star"/>}
                    {isLevel3 && <img src={star} alt="star"/>}
                    {isLevel3 && <img src={star} alt="star"/>}
            </div>
            <div className="hexagon hex-image">
                <div className="hexagon-in1">
                    <div className="hexagon-in2" style={{backgroundImage: `url(${url})`}}></div>
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
        return(
            <div className="unit-hex-container-medium">
            <div className="star-container">
                    {isLevel3 && <img src={star} alt="star"/>}
                    {isLevel3 && <img src={star} alt="star"/>}
                    {isLevel3 && <img src={star} alt="star"/>}
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
    }
}

export default HexagonUnit
