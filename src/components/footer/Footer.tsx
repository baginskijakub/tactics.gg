import React from 'react'
import './footer.css'

export const Footer:React.FC = () => {
    return (
        <div className="footer-wrapper">
            <p className="caption-small">TACTIX.GG isn’t endorsed by Riot Games and doesn’t reflect the views or opinions of Riot Games or anyone officially involved in producing or managing League of Legends. League of Legends and Riot Games are trademarks or registered trademarks of Riot Games, Inc. League of Legends © Riot Games, Inc.</p>
            <p className="caption-small grey">© TACTIX.GG 2022</p>
        </div>
    )
}

export default Footer
