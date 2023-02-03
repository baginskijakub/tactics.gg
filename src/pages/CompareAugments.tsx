import { constants } from 'fs/promises'
import React, {useEffect, useState} from 'react'
import './pages.css'
import { getComparableAugments } from '../model/Model'
import { PageHead } from './PageHead'
import {AugmentPanel} from '../components/compareAugments/AugmentPanel'
import { StageToggle } from '../components/compareAugments/StageToggle'


interface IComparableAugment{
    src: string
    name: string
    overallStats: {avgPlace: string, winratio: string, playrate: string}
    firstStats: {avgPlace: string, winratio: string, playrate: string}
    secondStats: {avgPlace: string, winratio: string, playrate: string}
    thirdStats: {avgPlace: string, winratio: string, playrate: string}
}

export const CompareAugments:React.FC = () => {
    const[augments, setAugments] = useState<IComparableAugment[]>([])
    const[support, setSupport] = useState(1)
    const[stageState, setStageState] = useState("All")

    useEffect(() => {
        getComparableAugments().then(res => {
            console.log(res)
            let tempAugments: IComparableAugment[]= []
            res.data.forEach((augment:any) => {
                tempAugments.push({
                    src: augment.icon,
                    name: augment.name,
                    overallStats:{
                        avgPlace: augment.overall_avg_place,
                        winratio: augment.overall_winrate,
                        playrate: augment.overall_frequency
                    },
                    firstStats:{
                        avgPlace: augment.first_tier_avg_place,
                        winratio: augment.first_tier_winrate,
                        playrate: augment.first_tier_frequency
                    },
                    secondStats:{
                        avgPlace: augment.second_tier_avg_place,
                        winratio: augment.second_tier_winrate,
                        playrate: augment.second_tier_frequency
                    },
                    thirdStats:{
                        avgPlace: augment.third_tier_avg_place,
                        winratio: augment.third_tier_winrate,
                        playrate: augment.third_tier_frequency
                    },
                })
            })

            setAugments(tempAugments)
        })
    }, [])

    function handleStageChange(value: string){
        setStageState(value)
    }


  return (
    <div className='augments-wrapper'>
        <PageHead 
            title='Compare Augments'
            text='Find out which of your offered augments is the best according to data'
            canonical='/compareAugments'
        />
        <StageToggle stateChange={handleStageChange}/>
        {augments.length > 0 && <div className='compare-panels-container'>
            <AugmentPanel augments={augments} stageState={stageState}/>
            <AugmentPanel augments={augments} stageState={stageState}/>
            <AugmentPanel augments={augments} stageState={stageState}/>
        </div>}

    </div>
  )
}
