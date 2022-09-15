import React from 'react'
import './builder.css'
import {Item as ItemClass} from '../../classes'
import JSON from 'json5'

interface Props{
    id: number
    name: string
}

export const Item:React.FC<Props> = ({id, name}) => {
    let url: string = "https://ittledul.sirv.com/Images/items/" + id + ".png";
    let itemObj: ItemClass = new ItemClass(id, name, url);

    return (
        <img className="builder-items-item draggable" src={`https://ittledul.sirv.com/Images/items/${id}.png`} id={itemObj.changeToJSON()} alt="item" draggable={true}/>
    )
}

export default Item
