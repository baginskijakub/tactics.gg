import React from 'react'
import './summoner.css'
import SummonerLastSquare from './SummonerLastSquare'

interface Props{
    placements: number[]
}

export const SummonerLast20:React.FC<Props> = ({placements}) => {

    let first: number[] = placements.slice(0, 9);
    let second: number[] = placements.slice(10, 19);
    let wins: number = 0;
    let top4: number = 0;
    let sum: number = 0;

    for(let i  = 0; i < placements.length; i++){
        sum += placements[i];
        if(placements[i] < 5){
            top4++;
            if(placements[i] === 1){
                wins++;
            }
        }
    }

    let percentWins = 100*(wins/placements.length)
    let percentTop4 = 100*(top4/placements.length)
    let avgPlacement = sum/placements.length

    let winsBlue: string = percentWins + "%"
    let winsWhite: string = 100 - percentWins + "%"

    let topBlue: string = percentTop4 + "%"
    let topWhite: string = 100 - percentTop4 + "%"

    let avgBlue: string = 100*(1 - (avgPlacement - 1)/7) + "%"
    let avgWhite: string = 100*(avgPlacement - 1)/7. + "%"

    return (
        <div className="summoner-last-wrapper">
            <h4>Match history</h4>
            <div className="summoner-last-squares-wrapper">
                <div className="summoner-last-squares-container">
                    {first.map((element) => {
                        return(
                            <SummonerLastSquare 
                                placement={element}
                                />
                        )
                    })}
                </div>
                <div className="summoner-last-squares-container">
                    {second.map((element) => {
                        return(
                            <SummonerLastSquare 
                                placement={element}
                                />
                        )
                    })}
                </div>
            </div>
            <div className="summoner-stats-container">
                <div className="summoner-stats-inner">
                        <div className="summoner-profile-bar-titles">
                            <p className="body-small">Wins</p>
                            <p className="body-small">{percentWins.toFixed(2)}% <span className="grey-text">({wins})</span></p>
                        </div>
                        <div className="summoner-profile-bar">
                            <div className="summoner-profile-bar-blue" style={{width: winsBlue}}></div>
                            <div className="summoner-profile-bar-white" style={{width: winsWhite}}></div>
                        </div>
                </div>
                <div className="summoner-stats-inner">
                        <div className="summoner-profile-bar-titles">
                            <p className="body-small">Top4</p>
                            <p className="body-small">{percentTop4.toFixed(2)}% <span className="grey-text">({top4})</span></p>
                        </div>
                        <div className="summoner-profile-bar">
                            <div className="summoner-profile-bar-blue" style={{width: topBlue}}></div>
                            <div className="summoner-profile-bar-white" style={{width: topWhite}}></div>
                        </div>
                </div>
                <div className="summoner-stats-inner">
                        <div className="summoner-profile-bar-titles">
                            <p className="body-small">Average Placement</p>
                            <p className="body-small">{avgPlacement.toFixed(2)}</p>
                        </div>
                        <div className="summoner-profile-bar">
                            <div className="summoner-profile-bar-blue" style={{width: avgBlue}}></div>
                            <div className="summoner-profile-bar-white" style={{width: avgWhite}}></div>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default SummonerLast20
