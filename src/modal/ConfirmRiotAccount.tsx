import React from 'react'
import './modal.css'
import { SecondaryButton } from '../components/buttons/SecondaryButton'
import { PrimaryButton } from '../components/buttons/PrimaryButton'

interface IUser{
  email: string
  password: string
  summonerName: string
  region: string
  username: string
}

interface Props{
  setParentState: (state:string) => void
}

export const ConfirmRiotAccount:React.FC<Props> = ({setParentState}) => {
  return (
    <>
        <div className='modal-head'>
          <h3>Is that your Riot account?</h3>
          <p className='body-small'>Please confirm that you’re using your account</p>
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
        <div className='buttons-container'>
            <PrimaryButton text='No' fn={() => setParentState("SignUp")}/>
            <SecondaryButton text="Yes" fn={() => setParentState("VerifyEmail")}/>
        </div>


    </>
  )
}

export default ConfirmRiotAccount