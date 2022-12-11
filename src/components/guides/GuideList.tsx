import React from 'react'
import './guides.css'
import linkIcon from '../../images/icons/link.svg'

interface Props{

    size: "small" | "big"
    date: string
    title: string
    body: string
    set: string
    minutesRead: number
    src: string
}

export const GuideList:React.FC = () => {
    if(false){
        return (
            <div className="guide-list-wrapper">
                <div className="guide-list-head">
                    <p className="caption-small grey">October 14, 2022</p>
                    <div className="guide-list-head-inner">
                        <h4>Olaf Reroll Guide</h4>
                        <p className="body-small grey">A beginner’s guide to play Olaf reroll. This comp is fairly hard to play and most importantly has a lot of prequities. As Olaf can gain a lot of Attack Damage with...</p>
                    </div>
                    <div className="guide-list-foot">
                        <p className="caption-small guide-set-tooltip">Set 7.5</p>
                        <span className="dot-separator"/>
                        <p className="caption-small grey">5 min read</p>
                        <span className="dot-separator"/>
                        <button className="copy-button"><img src={linkIcon} alt="copy to clipboard"/></button>                   
                    </div>
                </div>
                <img className="guide-list-splash" src="https://ittledul.sirv.com/Images/guides/splashes/Olaf.jpg" alt={"guide name"}></img>
    
            </div>
        )
    }
    else{
        return (
            <div className="guide-list-wrapper-small">
                <div className="guide-list-head-small">
                    <div className='guide-list-author'>
                        <img src='https://raw.communitydragon.org/latest/game/assets/ux/summonericons/profileicon4881.png'/>
                        <h6>baginski</h6>
                        <div className='guide-list-foot'>
                                <p className='caption-small grey'>Grandmaster 1098LP</p>
                                <span className="dot-separator"/>
                                <p className='caption-small grey'>EUW</p>
                        </div>
                        
                    </div>
                    <div className="guide-list-head-inner">
                        <h4>Olaf Reroll Guide</h4>
                        <p className="body-small grey">A beginner’s guide to play Olaf reroll. This comp is fairly hard to play and most importantly has a lot of prequities. As Olaf can gain a lot of Attack Damage with...</p>
                    </div>
                    <div className="guide-list-foot">
                        <p className="caption-small guide-set-tooltip">Set 7.5</p>
                        <span className="dot-separator"/>
                        <p className="caption-small grey">5 min read</p>
                        <span className="dot-separator"/>
                        <p className="caption-small grey">October 14, 2022</p>
                        <span className="dot-separator"/>
                        <button className="copy-button"><img src={linkIcon} alt="copy to clipboard"/></button>                   
                    </div>
                </div>
                <img className="guide-list-splash" src="https://ittledul.sirv.com/Images/guides/splashes/Olaf.jpg" alt={"guide name"}></img>
    
            </div>
        )
    }

}
