import React from 'react'
import AnalysisPerformance from './AnalysisPerformance'
import AnalysisUnits from './AnalysisUnits'
import AnalysisAugments from './AnalysisAugments'
import './builder.css'
import { AnalysisUnit, AnalysisItem, Augment, Analysis as AnalysisClass } from '../../classes'

interface Props{
    analysis: AnalysisClass | string
}
export const Analysis:React.FC<Props> = ({analysis}) => {

    if(typeof analysis === 'string'){
        if(analysis === "Loading"){
                return(
                    <div className="analysis-placeholder">
                        <h4>Loading</h4>
                        <div className="lds-dual-ring"></div>
                    </div>
            )
        }
        else if(analysis === "Wait"){
                return(
                    <div className="analysis-placeholder">
                        <h5>Please, wait one minute before analysing another comp.</h5>
                    </div>
                )
        }
        else{
            return(
                <div></div>
            )
        }

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
    analysis.augments.forEach(augment => {
        augments.push(new Augment(`https://ittledul.sirv.com/Images/augments/${augment.name}.png`, augment.name, augment.avgPlacement, augment.winrate, augment.frequency))
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
