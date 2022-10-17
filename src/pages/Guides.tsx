import React from 'react'
import {GuideList} from '../components/guides/GuideList'
import { DefaultSearch } from "../components/search/DefaultSearch";

export const Guides:React.FC = () => {
    return (
        <div className="guides-wrapper">
            <div className="sort-navigation-container">
                <DefaultSearch initialValue="Search guide" inputChange={() => {}}/>
            </div>
            
            <GuideList/>
        </div>
    )
}
