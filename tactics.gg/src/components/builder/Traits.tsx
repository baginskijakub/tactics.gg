import React from 'react'
import infoIcon from '../../images/icons/info.svg'
import './builder.css'
import Trait from './Trait'

export const Traits:React.FC = () => {
    return (
        // <div className="builder-traits-wrapper">
        //         <img src={infoIcon} alt="icon"/>
        //         <Trait />
        //         <h5 >No active traits</h5>
        // </div>

        <div className="builder-traits-wrapper">
                <Trait 
                    style={0}
                    name="Whispers"
                    active={1}
                    breakpoints={[2,4,6]}
                    />
                <Trait 
                    style={0}
                    name="Mage"
                    active={1}
                    breakpoints={[3,5,7,9]}
                    />
        </div>
    )
}

export default Traits
