import React from 'react';
import star from '../../images/icons/star.svg';
import './unit.css';


interface Item{
    id: number;
    name: string;
    url: string;
}

interface Props{
    id: number;
    name: string;
    cost: number;
    url: string;
    size: "big" | "medium" | "small";
    isLevel3: boolean;
    items: Item[] | null;
}
export const Unit:React.FC<Props> = ({name, cost, url, size, isLevel3, items}) => {
    var borderColor: string = "grey-border";

    switch(cost){
        case 2:
            borderColor = "green-border";
            break;
        case 3:
            borderColor = "blue-border";
            break;
        case 4:
        case 8:
            borderColor = "purple-border";
            break;
        case 5:
        case 10:
            borderColor = "yellow-border";
            break;
    }
    if(size === "big")
        return (
            <div className="unit-container">
                <div className="star-container">
                    {isLevel3 && <img src={star} alt="star"/>}
                    {isLevel3 && <img src={star} alt="star"/>}
                    {isLevel3 && <img src={star} alt="star"/>}
                </div>
                <img className={`unit-image ${borderColor}`} src={url} alt={name}/>
                <div className="item-container">
                    {items !== null && items.map((itemElement) => (
                        <img src={itemElement.url} alt={itemElement.name}/>
                    ))}
                </div>
            </div>
        )
    else if(size === "medium"){
        return(
            <div className="unit-container">
                <div className="star-container-medium">
                    {isLevel3 && <img src={star} alt="star"/>}
                    {isLevel3 && <img src={star} alt="star"/>}
                    {isLevel3 && <img src={star} alt="star"/>}
                </div>
                <img className={`unit-image-medium ${borderColor}`} src={url} alt={name}/>
                <div className="item-container-medium">
                    {items !== null && items.map((itemElement) => (
                        <img src={itemElement.url} alt={itemElement.name}/>
                    ))}
                </div>
            </div>
        )
    }
    else{
        return(
            <div className="unit-container">
                <div className="star-container-small">
                    {isLevel3 && <img src={star} alt="star"/>}
                    {isLevel3 && <img src={star} alt="star"/>}
                    {isLevel3 && <img src={star} alt="star"/>}
                </div>
                <img className={`unit-image-small ${borderColor}`} src={url} alt={name}/>
                <div className="item-container-small">
                    {items !== null && items.map((itemElement) => (
                        <img src={itemElement.url} alt={itemElement.name}/>
                    ))}
                </div>
            </div>
        )
    }
}

export default Unit
