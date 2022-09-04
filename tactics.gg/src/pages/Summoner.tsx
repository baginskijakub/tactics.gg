import React from 'react'
import './pages.css'

import SummonerProfile from '../components/summoner/SummonerProfile'
import SummonerStats from '../components/summoner/SummonerStats'
import SummonerLast20 from '../components/summoner/SummonerLast20'
import SummonerProgress from '../components/summoner/SummonerProgress'


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
}

export const Summoner:React.FC<Props> = ({profile, stats, placements}) => {
    return (
        <div className="summoner-wrapper">
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
        </div>
    )
}

export default Summoner
