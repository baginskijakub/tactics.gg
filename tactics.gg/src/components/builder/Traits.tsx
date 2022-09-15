import React from 'react'
import infoIcon from '../../images/icons/info.svg'
import './builder.css'

export const Traits:React.FC = () => {
    return (
        <div className="builder-traits-wrapper">
                <img src={infoIcon} alt="icon"/>
                <h5 >No active traits</h5>
        </div>
    )
}

export default Traits
