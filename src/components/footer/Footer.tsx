import React from 'react'
import './footer.css'
import {Link} from 'react-router-dom'

const linksStyle={
    fontSize: 14,
    textDecoration: "none"
}
export const Footer:React.FC = () => {
    return (
        <div className="footer-wrapper">
            <div className="footer-links">
                <Link to="/privacy" style={linksStyle}>Privacy Policy</Link>
                <Link to="/privacy" style={linksStyle}>Terms &#38; Conditions</Link>
            </div>
            <p className="caption-small">TACTIX.GG isn’t endorsed by Riot Games and doesn’t reflect the views or opinions of Riot Games or anyone officially involved in producing or managing League of Legends. League of Legends and Riot Games are trademarks or registered trademarks of Riot Games, Inc. League of Legends © Riot Games, Inc.</p>
            <p className="caption-small grey">© TACTIX.GG 2022</p>
        </div>
    )
}

export default Footer
