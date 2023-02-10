import React from 'react'
import './pages.css'
import {Helmet} from "react-helmet"
import ggIcon from '../images/icons/gg_logo.png'
import {SecondaryButton} from '../components/buttons/SecondaryButton'

interface Props{
    title: string
    text?: string
    canonical?: string
    buttonText?: string
    buttonOnClick?: () => void
}
export const PageHead:React.FC<Props> = ({title, text, canonical, buttonText, buttonOnClick}) => {
    return (
        <div className="page-head-wrapper">
            <Helmet>
                <title>{title}</title>
                <link rel="icon" href={ggIcon}></link>
                <link rel="canonical" href={"https://tactix.gg" + canonical}></link>
                <meta name="description" content={`${text}. Climb faster with our up to date TFT compositions and rankings.`} data-rh="true"></meta>
            </Helmet>
            <div className='page-head-inner'>
                <h1>{title}</h1>
                {text !== undefined && <p className="body">{text}</p>}
            </div>
            {(buttonText !== undefined && buttonOnClick !== undefined) && <SecondaryButton text={buttonText} fn={buttonOnClick}/>}
        </div>
    )
}