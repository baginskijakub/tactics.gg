import React from 'react'
import './pages.css'
import {GuideList} from '../components/guides/GuideList'
import { DefaultSearch } from "../components/search/DefaultSearch";
import VerticalAd from '../components/ads/VerticalAd';
import HorizontalAdd from '../components/ads/HorizontalAdd';

export const Guides:React.FC = () => {
    const [width, setWidth] = React.useState(window.innerWidth);

    //change navbar on breakpoint
    React.useEffect(() => {
      window.addEventListener("resize", () => setWidth(window.innerWidth));
    }, []);

    return (
        <div className="guides-page-wrapper">
            {width > 1000 ? <VerticalAd /> : <HorizontalAdd />}
            <div className='guides-container'>
                <DefaultSearch initialValue='Search guide' inputChange={() => {}}/>
                <GuideList/>
                <GuideList/>
                <GuideList/>
                <GuideList/>
            </div>
            {width > 1000 ? <VerticalAd /> : <HorizontalAdd />}
        </div>
    )
}
