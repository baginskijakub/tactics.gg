import React, {useEffect, useState} from 'react'
import './modal.css'
import { SecondaryButton } from '../components/buttons/SecondaryButton'

//hooks
import {useModalChange} from './ModalContext'

export const CreateCompletion:React.FC = () => {
  const modalChange = useModalChange()


  return (
    <>
        <div className='modal-head'>
          <h3>Account succesfully created!</h3>
          <p className='body-small'>Thanks for creating your account</p>
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

        <SecondaryButton text='Continue' fn={modalChange(false)}/>
    </>
  )
}

export default CreateCompletion