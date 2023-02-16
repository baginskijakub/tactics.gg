import React from 'react'
import { BuilderTrait } from '../../classes'
import {Trait} from '../trait/Trait'
import './embed.css'

interface Props{
    traits: BuilderTrait[]
}
export const Traits:React.FC<Props> = ({traits}) => {

  return (
    <div className='embed-traits-wrapper'>
        {traits.map((trait) => {
            if(trait.style > 0){
                return(
                    <div className='embed-trait-container'>
                        <Trait size='small' hasValue={true} hasLabel={true} name={trait.name} currentTrait={trait.active} traitStyle={trait.style} url={trait.icon}/>
                    </div>
                )
            }
        })}
    </div>
  )
}

export default Traits