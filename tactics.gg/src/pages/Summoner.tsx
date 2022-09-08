import React, {useState} from 'react'
import './pages.css'
import {getSummonersData} from './summoner-logic'

import SummonerProfile from '../components/summoner/SummonerProfile'
import SummonerStats from '../components/summoner/SummonerStats'
import SummonerLast20 from '../components/summoner/SummonerLast20'
import SummonerProgress from '../components/summoner/SummonerProgress'
import SummonerMatch from '../components/summoner/SummonerMatch'
import SummonerSearch from '../components/search/SummonerSearch'
import SummonerPlaceholder from '../components/summoner/SummonerPlaceholder'

import {Match, Profile, Stats} from '../classes'


interface Props{
    profile: Profile
    stats: Stats
    placements: number[]
    matches: Match[]
}

export const Summoner:React.FC<Props> = ({profile, stats, placements, matches}) => {
    const[summonerName, setSummonerName] = useState("")
    const[profileState, setProfile] = useState<undefined | Profile>(undefined)
    const[statsState, setStats] = useState<undefined | Stats>(undefined)
    const[matchesState, setMatches] = useState<undefined | Match[]>(undefined)


    function handleSummoner(name: string){
        setSummonerName(name);
        getSummonersData(name).then((res) => {
            setProfile(new Profile(name, "EU West", profile.icon, res.division, res.tier, res.lp, 21.07, 184, profile.rankIcon))
            setStats(new Stats(res.gamesOverall, res.winsOverall, stats.percentWins, stats.top4, stats.percentTop4, stats.avgPlacement))
            console.log(res.last20MatchesData)
            //setMatches(new Match(res.last20MatchesData.comps[0].playerComposition.placement, "Ranked", res.last20MatchesData.comps[0].playedOn, res.last20MatchesData.comps[0].playerComposition.augments, ))
            setMatches(res.last20MatchesData.comps.map((comp: any) => {
                return (
                    new Match(
                        comp.playerComposition.placement,
                        "Ranked",
                        comp.playedOn,
                        comp.playerComposition.augments,
                        comp.playerComposition.units,
                        comp.playerComposition.traits,
                        []
                    )
                )
            }))
            setSummonerName(profile.name);
        })
    }
    
    return (
        <div className="summoner-wrapper">
            <SummonerSearch 
                handleInput={handleSummoner}
                />
           
            {summonerName === "" ? 
             <div className="summoner-wrapper">
                <div className="summoner-container-horizontal">
                    {profileState !== undefined && <SummonerProfile 
                        name={summonerName}
                        region={profileState.region}
                        icon={profileState.icon}
                        rank={profileState.rank}
                        tier={profileState.tier}
                        lp={profileState.lp}
                        top={profileState.top}
                        ranking={profileState.ranking}
                        rankIcon={profileState.rankIcon}
                        />}
                    {statsState !== undefined && <SummonerStats 
                        played={statsState.played}
                        wins={statsState.wins}
                        percentWins={statsState.percentWins}
                        top4={statsState.top4}
                        percentTop4={statsState.percentTop4}
                        avgPlacement={statsState.avgPlacement}
                        />}
                    </div>
                    {matchesState !== undefined &&  <div className="summoner-container-horizontal">
                        <SummonerLast20 
                            placements={placements}
                            />
                        <SummonerProgress />
                    </div>}
            </div> : <SummonerPlaceholder state="notFound"/>}
            { matchesState !== undefined && <SummonerMatch 
                placement={matchesState[0].placement}
                queueType={matchesState[0].queueType}
                timeAgo={matchesState[0].timeAgo}
                augments={matchesState[0].augments}
                units={matchesState[0].units}
                traits={matchesState[0].traits}
                companion={matchesState[0].companion}
                />     }
        </div>
    )
}

export default Summoner
