import { blue } from '@mui/material/colors';
import React, {useState} from 'react'
import {AnalysisUnit as Unit} from '../../classes'
import './builder.css'

interface Props{
    units: Unit[]
}

export const AnalysisUnits:React.FC<Props> = ({units}) => {
    const[selectedUnit, setSelectedUnit] = useState(0);

    function handleUnitSelection(index: number){
        setSelectedUnit(index);
    }

    return (
        <div className="analysis-units-wrapper">
            <div className="analysis-units-units">
                {units.map((unit, index) => {
                    return (
                        <img className={`${selectedUnit == index && "analysis-unit-selected"}`} src={`https://ittledul.sirv.com/Images/units/${unit.id}.png`} id={unit.name} alt={unit.name} onClick={() => handleUnitSelection(index)}></img>
                    )
                })}
            </div>
            <div className="analysis-units-items">
                {units[selectedUnit].items.map((item, index) => {
                    let blueWidth = parseFloat(item.playRatio)
                    if(blueWidth > 100){
                        blueWidth = 100
                    }
                    let whiteWidth = 100 - blueWidth;
                    
                    return(
                        <div className="analysis-item-container">
                            <img src={`https://ittledul.sirv.com/Images/items/${item.id}.png`}></img>     
                            <div className="analysis-item-stats">
                                <p className="caption">{item.avgPlacement}</p>
                                <p className="caption-small">{item.playRatio}%</p>
                            </div>                                                          
                            <div className="analysis-item-bar">
                                <span className="analysis-item-blue" style={{width: `${blueWidth}%`}}/>
                                <span className="analysis-item-white" style={{width: `${whiteWidth}%`}}/>
                            </div>
                        </div>
                    )
                })}
                
            </div>
            
        </div>
    )
}

export default AnalysisUnits
