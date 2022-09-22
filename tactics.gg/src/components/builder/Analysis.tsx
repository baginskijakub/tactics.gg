import React from 'react'
import AnalysisPerformance from './AnalysisPerformance'
import AnalysisUnits from './AnalysisUnits'
import AnalysisAugments from './AnalysisAugments'
import data from './xddd.json'
import './builder.css'
import { AnalysisUnit, AnalysisItem, Augment, Analysis as AnalysisClass } from '../../classes'

interface Props{
    analysis: AnalysisClass | string
}
export const Analysis:React.FC<Props> = ({analysis}) => {

    if(typeof analysis === 'string'){
        return(
            <div className="analysis-placeholder">
                <h4>{analysis}</h4>
            </div>
        )
    }   
    else{
    let units:AnalysisUnit[] = [] 
    analysis.units.forEach(unit => {
        let items:AnalysisItem[] = [] 
        unit.items.forEach(item => {
            items.push(new AnalysisItem(item.name, item.id, item.avgPlacement, item.playRatio))
        })
        units.push(new AnalysisUnit(unit.name, unit.name, items))
    })
    let augments: Augment[] = []
    data.augments.forEach(augment => {
        augments.push(new Augment(`https://ittledul.sirv.com/Images/augments/${augment.name}.png`, augment.name, parseFloat(augment.avgPlace), parseFloat(augment.winRate), parseFloat(augment.playRate)))
    })
    return (
        <div className="analysis-wrapper">
            <AnalysisPerformance 
                avgPlacement={analysis.avgPlace}
                top4Ratio={analysis.top4Ratio}
                winrate={analysis.winRate}
                playrate={analysis.playRate}
                />
            <AnalysisUnits
                units={units}
                />
            <AnalysisAugments 
                augments={augments}
                />
        </div>
    )
    }
}

export default Analysis
