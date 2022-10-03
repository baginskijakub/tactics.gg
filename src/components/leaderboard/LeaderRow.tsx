import React from 'react'
import './leaderboard.css'

interface Props{
    ranking: number
    icon: number
    name: string
    rank: string
    lp: number
    top4ratio: number
    played: number
}
export const LeaderRow:React.FC<Props> = ({ranking, icon, name, rank, lp, top4ratio, played}) => {
    return (
        <div className="leader-row-wrapper">
            <div className="leader-row-summoner">
                <h5>{ranking}</h5>
                <img src={`https://raw.communitydragon.org/latest/game/assets/ux/summonericons/profileicon${icon}.png`}/>
                <h4>{name}</h4>
            </div>
            <p className="body">{rank}</p>
            <p className="body">{lp}</p>
            <p className="body">{top4ratio}%</p>
            <p className="body">{played}</p>

        </div>
    )
}

export default LeaderRow
