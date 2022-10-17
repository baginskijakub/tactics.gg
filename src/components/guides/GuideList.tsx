import React from 'react'
import './guides.css'
import linkIcon from '../../images/icons/link.svg'

export const GuideList:React.FC = () => {
    return (
        <div className="guide-list-wrapper">
            <div className="guide-list-head">
                <p className="caption-small">October 14, 2022</p>
                <div className="guide-list-head-inner">
                    <h4>Olaf Reroll Guide</h4>
                    <p className="body-small">A beginner’s guide to play Olaf reroll. This comp is fairly hard to play and most importantly has a lot of prequities. As Olaf can gain a lot of Attack Damage with...</p>
                </div>
                <div className="guide-list-foot">
                    <p className="caption-small guide-set-tooltip">Set 7.5</p>
                    <span className="dot-separator"/>
                    <p className="caption-small">5 min read</p>
                    <span className="dot-separator"/>
                    <button className="copy-button"><img src={linkIcon} alt="copy to clipboard"/></button>                   
                </div>
            </div>
            <img className="guide-list-splash" src="https://ittledul.sirv.com/Images/guides/splashes/Olaf.jpg" alt={"guide name"}></img>

        </div>
    )
}
