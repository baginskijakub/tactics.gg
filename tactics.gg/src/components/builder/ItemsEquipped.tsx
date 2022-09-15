import React from 'react'
import infoIcon from '../../images/icons/info.svg'
import './builder.css'

export const ItemsEquipped:React.FC = () => {
    return (
        <div className="builder-traits-wrapper">
                <img src={infoIcon} alt="icon"/>
                <h5 >No items equipped</h5>
        </div>
    )
}

export default ItemsEquipped