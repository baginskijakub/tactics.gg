import React from 'react'
import './pages.css'
import { SummonerProfile } from '../components/summoner/SummonerProfile'
import { useUser } from '../login/LoginContext'
import { SecondaryButton } from '../components/buttons/SecondaryButton'
import { DefaultSearch } from '../components/search/DefaultSearch'
import { GuideList } from '../components/guides/GuideList'

import challIcon from '../images/icons/chall.png'

export const Profile:React.FC = () => {
  const user = useUser()

  if(user !== null && user.summonerName !== undefined && user.region !== undefined && user.icon !== undefined && user.rank !== undefined){
    return (
      <div className='profile-page-wrapper'>
          <div className='profile-vertical-container'>
            <SummonerProfile 
              name={user.summonerName } 
              region={user.region} 
              icon={user.icon}
              rank={user.rank}
              lp={43}
              top={3213}
              rankIcon={challIcon}
              ranking={1.234}
            />
            <div className='profile-info-wrapper'>
                <h3>Profile</h3>
                <div className='profile-info-container'>
                    <div className='profile-info-inner'>
                        <h4>Posts</h4>
                        <span className='profile-inner-separator'/>
                        <h4 className='profile-inner-counter'>0</h4>
                    </div>
                    <div className='profile-info-inner' style={{opacity: 0.5}}>
                        <h4>In development</h4>
                        <span className='profile-inner-separator'/>
                        <h4 className='profile-inner-counter'>0</h4>
                    </div>
                </div>
                <div className='write-post-container'>
                        <div className='write-post-head'>
                                <h4>Write a post</h4>
                                <p className='body'>Contribute to Teamfight Tactics community by sharing your thoughts and creating guides. </p>
                        </div>
                        <SecondaryButton text='Create a post'/>

                </div>
            </div>
            <div className='profile-info-wrapper'>
                <h3>Settings</h3>
                    <div className='profile-settings-inner'>
                        <h4>E-mail:</h4>
                        <p className='body-small'>{user.email}</p>
                        <SecondaryButton text='Change' />
                    </div>
                    <div className='profile-settings-inner'>
                        <h4>Riot account:</h4>
                        <p className='body-small'>{user.summonerName} {user.region}</p>
                        <SecondaryButton text='Change' />
                    </div>
                    <div className='profile-settings-inner'>
                        <h4>Password</h4>
                        <SecondaryButton text='Change' />
                    </div>
            </div>

          </div>
          <div className='profile-vertical-container'>
            <DefaultSearch initialValue='Search post' inputChange={()=>{}}/>
            <GuideList />
            <GuideList />
            <GuideList />
            <GuideList />
          </div>
      </div>
    )
  }
  return(
    <></>
  )
}