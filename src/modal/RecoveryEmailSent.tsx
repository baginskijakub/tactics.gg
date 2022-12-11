import React, {useEffect, useState} from 'react'
import './modal.css'
import { SecondaryButton } from '../components/buttons/SecondaryButton'

export const RecoveryEmailSent:React.FC = () => {


  return (
    <>
        <div className='modal-head'>
          <h3>Email has been sent</h3>
          <p className='body-small' style={{textAlign: "center"}}>We’ve sent a recovery link to your email. <br/>Please click on the link once you get it.</p>
        </div>

        <div className='profile-wrapper'>
            <img src="https://raw.communitydragon.org/latest/game/assets/ux/summonericons/profileicon1591.png"/>
            <div className='profile-inner'>
                <h3>baginski</h3>
                <div className='profiole-inner-in'>
                    <p className='body-small'>Master 237LP</p>
                    <span className='dot-divider'/>
                    <p className='body-small'>EUW</p>
                </div>
            </div>
        </div>

        <SecondaryButton text='Close' />
    </>
  )
}

export default RecoveryEmailSent