import React from 'react'
import './pages.css'
import {GuideList} from '../components/guides/GuideList'
import { DefaultSearch } from "../components/search/DefaultSearch";
import { SecondaryButton } from '../components/buttons/SecondaryButton';

interface TopicProps{
    name: string
}

const Topic:React.FC<TopicProps> = ({name}) => {
    return(
        <div className='topic-container'>
            <p className='caption'>{name}</p>
        </div>
    )
}

export const Guides:React.FC = () => {
    const topics = ["Set 8", "Guide", "Patch Notes", "Competetive", "For begginers", "For experts", "Tips & Tricks", "Augments"]

    return (
        <div className="guides-wrapper">
            <div className='guides-container'>
                <DefaultSearch initialValue='Search guide' inputChange={() => {}}/>
                <GuideList/>
                <GuideList/>
                <GuideList/>
                <GuideList/>
            </div>
            <div className='guides-side-bar'>
                <div className='guides-counter-wrapper'>
                    <div className='guides-counter'>
                        <h3>322</h3>
                        <p className='body'>Posts</p>
                    </div>
                    <div className='guides-counter'>
                        <h3>137</h3>
                        <p className='body'>Authors</p>
                    </div>
                </div>
                <div className='trending-topics-container'>
                    <h4>Trending topics</h4>
                    <div className='topics-wrapper'>
                        {topics.map(element => {
                            return <Topic name={element}/>
                        })}
                    </div>
                </div>
                <div className='write-post-container'>
                        <div className='write-post-head'>
                                <h4>Write your own post</h4>
                                <p className='body'>Contribute to Teamfight Tactics community by sharing your thoughts and creating guides. </p>
                        </div>
                        <SecondaryButton text='Create a post'/>

                </div>
            </div>       

        </div>
    )
}
