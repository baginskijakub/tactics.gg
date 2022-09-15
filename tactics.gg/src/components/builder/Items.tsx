import React from 'react'
import './builder.css'
import Dropdown from '../buttons/Dropdown'
import Item from './Item'

export const Items:React.FC = () => {

    let arr: string[]  = []
    for(let i = 0; i < 24; i++){
        arr.push("https://ittledul.sirv.com/Images/items/16.png")
    }
    return (
        <div className="builder-items-wrapper">
            <Dropdown 
                name="Type"
                values={["Regular", "Emblems", "Shimmerscale", "Radiant"]}
                defaultValue="Regular"
                size="small"
                />
            <div className="buiilder-items-container">
                {arr.map((element) => {
                    return <Item 
                                id={16}
                                name="Bloodthrister"
                                />
                })}
            </div>
        </div>
    )
}

export default Items
