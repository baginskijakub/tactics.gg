import React from 'react'
import {AnalysisPerformance} from './AnalysisPerformance'
import {AnalysisUnits} from './AnalysisUnits'
import {AnalysisAugments} from './AnalysisAugments'
import info from '../../images/icons/info.svg'
import './builder.css'
import { AnalysisUnit, AnalysisItem, Augment, Analysis as AnalysisClass } from '../../classes'

interface Props{
    analysis: AnalysisClass | string
    progres?: number
}
export const Analysis:React.FC<Props> = ({analysis, progres}) => {

    if(typeof analysis === 'string'){
        if(analysis === "Loading" && progres !== undefined){
                return(
                    <div className="analysis-placeholder">
                        <h4>Analyzing matches...</h4>
                        <p>{progres}%</p>
                        <div className="loading-bar-container">
                            <span className="loading-bar-loaded" style={{width: `${progres}%`}}/>
                        </div>
                    </div>
            )
        }
        else if(analysis === "Loading"){
                            return(
                    <div className="analysis-placeholder">
                        <h4>Analyzing matches...</h4>
                        <div className="lds-dual-ring"></div>
                    </div>
            )
        }
        else if(analysis === "Wait"){
                return(
                    <div className="analysis-placeholder">
                        <img src={info} alt="warning"></img>
                        <h5>Please, wait one minute before analysing another comp.</h5>
                    </div>
                )
        }
        else if(analysis === "No matches"){
                return(
                    <div className="analysis-placeholder">
                        <img src={info} alt="warning"></img>
                        <h4>No matches with this composition were found.</h4>
                        <p className="body-small">Consider removing less important units that may vary across other players compositions.</p>
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
            items.push(new AnalysisItem(item.name, item.id, item.avgPlacement, item.playRatio, item.src))
        })
        units.push(new AnalysisUnit(unit.name, unit.name, items, unit.src))
    })
    let augments: Augment[] = []
    analysis.augments.forEach(augment => {
        augments.push(new Augment( augment.name, augment.src, augment.avgPlacement, augment.winrate, augment.frequency))
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
