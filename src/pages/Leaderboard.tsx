import React from 'react'
import Dropdown from '../components/buttons/Dropdown'
import './pages.css'
import LeaderRow from '../components/leaderboard/LeaderRow'
import { PrimaryButton } from '../components/buttons/PrimaryButton'

export const Leaderboard:React.FC = () => {

    function handleRegion(){

    }

    function handleRenderMore(){

    }
    
    return (
        <div className="augments-wrapper">
            <Dropdown 
                name="Region"
                values={["EUW", "EUNE", "NA", "KR", "CH", "BR", "OCE"]}
                defaultValue="EUW"
                onChange={handleRegion}
                />
            <div className="augments-container">
                <div className="leaderboard-titles">
                    <h5>Summoner</h5>
                    <h5>Rank</h5>
                    <h5>LP</h5>
                    <h5>Avg. Place</h5>
                    <h5>Winrate</h5>
                    <h5>Top4 Ratio</h5>
                    <h5>Games</h5>
                </div>
                <LeaderRow 
                    ranking={1}
                    icon={1000}
                    name="sh1rcane"
                    rank="Challanger"
                    lp={965}
                    avgPlace={3.91}
                    winrate={21.1}
                    top4ratio={57.8}
                    played={432}
                    />
                                <LeaderRow 
                    ranking={1}
                    icon={1000}
                    name="sh1rcane"
                    rank="Challanger"
                    lp={965}
                    avgPlace={3.91}
                    winrate={21.1}
                    top4ratio={57.8}
                    played={432}
                    />
                                <LeaderRow 
                    ranking={1}
                    icon={1000}
                    name="sh1rcane"
                    rank="Challanger"
                    lp={965}
                    avgPlace={3.91}
                    winrate={21.1}
                    top4ratio={57.8}
                    played={432}
                    />
                                <LeaderRow 
                    ranking={1}
                    icon={1000}
                    name="sh1rcane"
                    rank="Challanger"
                    lp={965}
                    avgPlace={3.91}
                    winrate={21.1}
                    top4ratio={57.8}
                    played={432}
                    />
            </div>
            <PrimaryButton 
                text="Load more"
                fn={handleRenderMore}
                />
        </div>
    )
}

export default Leaderboard
