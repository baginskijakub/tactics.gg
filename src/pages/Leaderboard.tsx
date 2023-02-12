import React, {useState, useEffect} from 'react'
import {Dropdown} from '../components/buttons/Dropdown'
import './pages.css'
import {LeaderRow} from '../components/leaderboard/LeaderRow'
import {PageHead} from './PageHead'
import { PrimaryButton } from '../components/buttons/PrimaryButton'
import { getLeaderboard } from '../model/Model'
import {TableLoader} from '../components/table/TableLoader'
import HorizontalAdd from '../components/ads/HorizontalAdd'

export const Leaderboard:React.FC = () => {
    const[region, setRegion] = useState("euw1")
    const[players, setPlayers] = useState<any[]>([])

    function getRegionId(value: string){
        switch(value){
            case "EUW":
                return "euw1"
            case "EUNE":
                return "eun1"
            case "BR":
                return "br1"
            case "JP":
                return "jp1"
            case "KR":
                return "kr"
            case "LA1":
                return "la1"
            case "LA2":
                return "la2"
            case "NA":
                return "na1"
            case "OCE":
                return "oc1"
            case "RU":
                return "ru"
            case "TR":
                return "tr1"
        }
        return ""
    }
    
    function handleRegion(value: string){
        setRegion(getRegionId(value))
    }

    useEffect(() => {
        setPlayers([])
        getLeaderboard(region).then(res => {
            let tempPlayers:any[] = []
            res.data.forEach((player:any, i:any) => {
                tempPlayers.push({
                    "ranking": i+1, 
                    "icon": player.profileIcon, 
                    "name": player.name, 
                    "rank":  player.rank,
                    "lp": player.lp, 
                    "top4Ratio": player.top4Ratio,
                    "games": player.gamesOverall
                })
            })
            setPlayers(tempPlayers)
        })
    }, [region])

    function handleRenderMore(){

    }
    
    return (
        <div className="augments-wrapper">
            <HorizontalAdd/>
            <PageHead 
                title="TFT Leaderboards"
                text="The best Teamfight Tactics players by region"
                canonical="/leaderboard"
                />
            <Dropdown 
                name="Region"
                values={["EUW", "EUNE", "NA", "KR", "BR", "OCE"]}
                defaultValue="EUW"
                onChange={handleRegion}
                />
            <div className="augments-container">
                <div className="leaderboard-titles">
                    <h5>Summoner</h5>
                    <h5>Rank</h5>
                    <h5>LP</h5>
                    {/* <h5>Avg. Place</h5>
                    <h5>Winrate</h5> */}
                    <h5>Top4 Ratio</h5>
                    <h5>Games</h5>
                </div>

                {players.length > 0 ? 
                    players.map(player => {
                        return(
                            <LeaderRow 
                                ranking={player.ranking}
                                rank={player.rank}
                                name={player.name}
                                icon={player.icon}
                                lp={player.lp}
                                top4ratio={player.top4Ratio}
                                played={player.games}
                            />
                        )
                    }) : <TableLoader/>
                }
            </div>
            {/* <PrimaryButton 
                text="Load more"
                fn={handleRenderMore}
                /> */}
                <HorizontalAdd/>
        </div>
    )
}
