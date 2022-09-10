import React, {useState} from 'react'
import './pages.css'
import {searchSummoner} from '../model/Model'

import SummonerProfile from '../components/summoner/SummonerProfile'
import SummonerStats from '../components/summoner/SummonerStats'
import SummonerLast20 from '../components/summoner/SummonerLast20'
import SummonerProgress from '../components/summoner/SummonerProgress'
import SummonerMatch from '../components/summoner/SummonerMatch'
import SummonerSearch from '../components/search/SummonerSearch'
import SummonerPlaceholder from '../components/summoner/SummonerPlaceholder'

import {Match, Profile, Stats, Last20, Unit, Trait, Item} from '../classes'



export const Summoner:React.FC = () => {
    const[summonerName, setSummonerName] = useState("")
    const[profileState, setProfile] = useState<undefined | Profile>(undefined)
    const[statsState, setStats] = useState<undefined | Stats>(undefined)
    const[last20State, setLast20] = useState<undefined | Last20>(undefined)
    const[matchesState, setMatches] = useState<undefined | Match[]>(undefined)


    function handleSummoner(name: string){
        setSummonerName(name);
        searchSummoner("euw1", name).then((res:any) => {
            console.log(res)
            setProfile( new Profile(
                res.data.profile.name,
                res.data.profile.region,
                `https://raw.communitydragon.org/latest/game/assets/ux/summonericons/profileicon${res.data.profile.icon}.png`,
                res.data.profile.rank,
                res.data.profile.lp,
                0.027,
                res.data.profile.ranking,
                `https://ittledul.sirv.com/Images/tiers/${res.data.profile.rank.split(" ")[0]}.png`
                ));
            setStats(new Stats(
                res.data.stats.gamesPlayed,
                12,
                15.12,
                res.data.stats.top4,
                res.data.stats.top4Percent,
                4.12
            ));
            setLast20( new Last20(
                res.data.last20.placements,
                res.data.last20.avgPlacement,
                res.data.last20.top4Placements,
                res.data.last20.top4Procentage,
                res.data.last20.wins,
                res.data.last20.winsProcentage,
            ));
            setMatches(res.data.matches.map((match:any) => {
                let traits = match.trait.map((trait:any) => {
                    let arr = trait.name.split("_");
                    let traitName = arr[1].toLowerCase();
                    return (
                        new Trait(
                            traitName,
                            trait.currentTrait,
                            trait.style,
                            `https://ittledul.sirv.com/Images/traits/${traitName}.png`
                        )
                    )
                })

                let units  = match.units.map((unit:any) => {
                    let items = unit.items.map((item:any) => {

                        return new Item(
                            item.id,
                            item.name,
                            `https://ittledul.sirv.com/Images/items/${item.id}.png`
                        )
                    })
                    return (
                        new Unit(
                            unit.id,
                            unit.id, /*TODO*/
                            unit.cost,
                            `https://ittledul.sirv.com/Images/units/${unit.id}.png`,
                            unit.level,
                            items
                    ))
                })

                return (
                    new Match(
                        match.placement,
                        match.queueType,
                        match.timeAgo,
                        match.players[0].augments, /*TODO*/
                        units,
                        traits,
                        []
                    )
                )
            }))

            setSummonerName(res.data.profile.name);
        })
    }
    
    return (
        <div className="summoner-wrapper">
            <SummonerSearch 
                handleInput={handleSummoner}
                />
           
            {summonerName !== "" ? 
             <div className="summoner-wrapper">
                <div className="summoner-container-horizontal">
                    {profileState != undefined && <SummonerProfile 
                        name={summonerName}
                        region={profileState.region}
                        icon={profileState.icon}
                        rank={profileState.rank}
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
                    { last20State !== undefined &&  <div className="summoner-container-horizontal">
                        <SummonerLast20 
                            placements={last20State.placements}
                            avgPlacement={last20State.avgPlacement}
                            top4Placements={last20State.top4Placements}
                            top4Procentage={last20State.top4Procentage}
                            wins={last20State.wins}
                            winsProcentage={last20State.winsProcentage}
                            />
                        <SummonerProgress />
                    </div>  }
            </div> : <SummonerPlaceholder state="notFound"/>}
                {matchesState !== undefined && <SummonerMatch 
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
