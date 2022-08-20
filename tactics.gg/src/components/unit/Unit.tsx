import React from 'react';
import star from '../../images/icons/star.svg';
import './unit.css';
import sylas from '../../images/champions/Sylas_1653029846.jpg'


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
                {isLevel3 && <div className="star-container">
                    <img src={star} alt="star"/>
                    <img src={star} alt="star"/>
                    <img src={star} alt="star"/>
                </div>}
                <img className={`unit-image ${borderColor}`} src={sylas} alt={name}/>
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
                {isLevel3 && <div className="star-container-medium">
                    <img src={star} alt="star"/>
                    <img src={star} alt="star"/>
                    <img src={star} alt="star"/>
                </div>}
                <img className={`unit-image-medium ${borderColor}`} src={sylas} alt={name}/>
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
                {isLevel3 && <div className="star-container-small">
                    <img src={star} alt="star"/>
                    <img src={star} alt="star"/>
                    <img src={star} alt="star"/>
                </div>}
                <img className={`unit-image-small ${borderColor}`} src={sylas} alt={name}/>
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
