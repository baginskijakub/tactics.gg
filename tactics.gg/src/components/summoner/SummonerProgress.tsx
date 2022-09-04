import React from 'react'
import './summoner.css'

export const SummonerProgress:React.FC = () => {
    return (
        <div className="summoner-progress-wrapper">
            <h4>Progress Graph</h4>
            <div className="summoner-progress-container">
                <h4>We're currently collecting data.</h4>
                <h4>This feature should release soon.</h4>
            </div>
        </div>
    )
}

export default SummonerProgress
