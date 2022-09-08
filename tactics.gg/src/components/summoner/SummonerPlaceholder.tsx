import React from 'react'
import './summoner.css'

interface Props{
    state: "notFound" | "loading" | "notSearched"
}

export const SummonerPlaceholder:React.FC<Props>  = (state) => {
    return (
        <div className="summoner-placeholder-wrapper">
            <h3>Summoner not found</h3>
            <h4>We weren't able to find this player.</h4>
        </div>
    )
}

export default SummonerPlaceholder
