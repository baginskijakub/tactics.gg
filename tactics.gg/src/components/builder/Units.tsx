import React from 'react'
import './builder.css'
import {DefaultSearch} from '../search/DefaultSearch'
import Dropdown from '../buttons/Dropdown'
import Unit from './Unit'

export const Units:React.FC = () => {

    let arr:any = [];
        for(let i = 0; i<54; i++){
        arr.push(<Unit 
            id={12}
            name="Sylas"
            cost={3}
            size="small"
            url="https://ittledul.sirv.com/Images/units/TFT7_Sylas.png"
            level={0}
            items={[]}
            />)}
    
    return (
        <div className="builder-units-wrapper">
            <div className="builder-units-navigation">
                <Dropdown 
                    name="Sort"
                    values={["Cost", "A-Z"]}
                    defaultValue="Cost"
                    size="small"
                    />
                <DefaultSearch 
                    initialValue="Search unit"
                    />
            </div>
            <div className="builder-units-container">
                {arr}
                
            </div>
            
        </div>
    )
}

export default Units
