import React from 'react'
import './comp.css'
import HexagonUnit from '../unit/HexagonUnit';

interface Props{
    positioning: UnitHex[][];
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

interface Item{
    id: number;
    name: string;
    url: string;
}


export const CompPositioning:React.FC<Props> = ({positioning}) => {
    return (
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
    )
}

export default CompPositioning
