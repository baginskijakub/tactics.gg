import React, {useState} from 'react'
import './pages.css'

import SummonerProfile from '../components/summoner/SummonerProfile'
import SummonerStats from '../components/summoner/SummonerStats'
import SummonerLast20 from '../components/summoner/SummonerLast20'
import SummonerProgress from '../components/summoner/SummonerProgress'
import SummonerMatch from '../components/summoner/SummonerMatch'
import SummonerSearch from '../components/search/SummonerSearch'
import { match } from 'assert'

interface Item{
    id: number
    name: string
    url: string
}

interface Trait{
    name: string;
    currentTrait: number;
    traitStyle: number;
    url: string;
}

interface Unit {
    id: number;
    name: string;
    cost: number;
    url: string;
    level: 0 | 1 | 2 | 3;
    items: Item[] | null;
}

interface Companion{
    placement: number
    icon: string
    name: string
    roundEliminated: string
    augments: string[]
    traits: Trait[]
    units: Unit[]
    goldLeft: number
}

interface Match{
    placement: number
    queueType: "Ranked" | "Normal"
    timeAgo: string
    augments: string[]
    units: Unit[]
    traits: Trait[]
    companion: Companion[]
}

interface Profile{
    name: string
    region: string
    icon: string
    rank: number
    tier: string
    lp: number
    top: number
    ranking: number
    rankIcon: string
}

interface Stats{
    played: number
    wins: number
    percentWins: number
    top4: number
    percentTop4: number
    avgPlacement: number
}

interface Props{
    profile: Profile
    stats: Stats
    placements: number[]
    matches: Match[]
}

export const Summoner:React.FC<Props> = ({profile, stats, placements, matches}) => {
    const[summonerName, setSummonerName] = useState("")

    function handleSummoner(name: string){
        setSummonerName(name);
        //call api function
    }

    function placeholder(){
        console.log("TODO")
    }
    
    return (
        <div className="summoner-wrapper">
            <SummonerSearch 
                handleInput={() => handleSummoner}
                />
            <div className="summoner-container-horizontal">
                <SummonerProfile 
                    name={profile.name}
                    region={profile.region}
                    icon={profile.icon}
                    rank={profile.rank}
                    tier={profile.tier}
                    lp={profile.lp}
                    top={profile.top}
                    ranking={profile.ranking}
                    rankIcon={profile.rankIcon}
                    />
                <SummonerStats 
                    played={stats.played}
                    wins={stats.wins}
                    percentWins={stats.percentWins}
                    top4={stats.top4}
                    percentTop4={stats.percentTop4}
                    avgPlacement={stats.avgPlacement}
                    />
            </div>
            <div className="summoner-container-horizontal">
                <SummonerLast20 
                    placements={placements}
                    />
                <SummonerProgress />
            </div>  
            <SummonerMatch 
                placement={matches[0].placement}
                queueType={matches[0].queueType}
                timeAgo={matches[0].timeAgo}
                augments={matches[0].augments}
                units={matches[0].units}
                traits={matches[0].traits}
                companion={matches[0].companion}
                />          
        </div>
    )
}

export default Summoner
