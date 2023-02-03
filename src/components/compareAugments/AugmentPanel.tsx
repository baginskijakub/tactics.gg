import React, {useState, useEffect} from "react"
import './compare.css'
import AugmentSearch from './AugmentSearch'
import { Item } from "../../classes"

interface IComparableAugment{
    src: string
    name: string
    overallStats: {avgPlace: string, winratio: string, playrate: string}
    firstStats: {avgPlace: string, winratio: string, playrate: string}
    secondStats: {avgPlace: string, winratio: string, playrate: string}
    thirdStats: {avgPlace: string, winratio: string, playrate: string}
}

interface Props{
    stageState: string
    augments: IComparableAugment[]  
}



export const AugmentPanel:React.FC<Props> = ({augments, stageState}) => {

    const[augment, setAugment] = useState<IComparableAugment>(augments[0])

    
    useEffect(() => {
        let index = Math.floor(Math.random() * 50);
        setAugment(augments[index])
    }, [])

    function selectAugment(name: string){
        augments.forEach(augment => {
            if(augment.name === name){
                setAugment(augment)
            }
        })
    }

    //hero aug case
    let conditionalStyle: string = ""
    let srcArr: string[] = augment.src.split("/")
    if(srcArr[6] === "characters"){
        conditionalStyle = "hero-augment-big"
    }
        
    return(
        <div className="augment-panel-wrapper">
            <AugmentSearch augments={augments} selectAugment={selectAugment}/>
            <div className="augment-panel-augment">
                <img src={augment.src} className={conditionalStyle}/>
                <h3>{augment.name}</h3>
            </div>
            <table className="augment-panel-stats rounded-corners">
                <tbody>
                    <tr>
                        <th></th>
                        <th className="body">Overall</th> 
                        {(stageState === "All" || stageState === "2-1") && <th className="body">2-1</th>}
                        {(stageState === "All" || stageState === "3-2") && <th className="body">3-2</th> }
                        {(stageState === "All" || stageState === "4-2") && <th className="body">4-2</th> }
                    </tr>
                    <tr>
                        <th className="body">Avg. Place</th>
                        <th className="body">{augment.overallStats.avgPlace}</th> 
                        {(stageState === "All" || stageState === "2-1") && <th className="body">{augment.firstStats.avgPlace}</th>}
                        {(stageState === "All" || stageState === "3-2") && <th className="body">{augment.secondStats.avgPlace}</th>}
                        {(stageState === "All" || stageState === "4-2") && <th className="body">{augment.thirdStats.avgPlace}</th>}
                    </tr>
                    <tr>
                        <th className="body">Winratio</th>
                        <th className="body">{augment.overallStats.winratio}</th> 
                        {(stageState === "All" || stageState === "2-1") && <th className="body">{augment.firstStats.winratio}</th>}
                        {(stageState === "All" || stageState === "3-2") && <th className="body">{augment.secondStats.winratio}</th> }
                        {(stageState === "All" || stageState === "4-2") && <th className="body">{augment.thirdStats.winratio}</th>}
                    </tr>
                    <tr>
                        <th className="body">Playratio</th>
                        <th className="body">{augment.overallStats.playrate}</th> 
                        {(stageState === "All" || stageState === "2-1") && <th className="body">{augment.firstStats.playrate}</th>}
                        {(stageState === "All" || stageState === "3-2") && <th className="body">{augment.secondStats.playrate}</th> }
                        {(stageState === "All" || stageState === "4-2") && <th className="body">{augment.thirdStats.playrate}</th>}
                    </tr>
                </tbody>
            </table>
        </div>
    )
}