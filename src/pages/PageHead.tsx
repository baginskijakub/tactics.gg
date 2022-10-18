import React from 'react'
import './pages.css'
import {Helmet} from "react-helmet"
import ggIcon from '../images/icons/gg_logo.png'

interface Props{
    title: string
    text?: string
    canonical?: string
}
export const PageHead:React.FC<Props> = ({title, text, canonical}) => {


    return (
        <div className="page-head-wrapper">
            <Helmet>
                <title>{title}</title>
                <link rel="icon" href={ggIcon}></link>
                <link rel="canonical" href={canonical}></link>
                <meta name="description" content={`${text}. Climb faster with our up to date TFT compositions and rankings.`} data-rh="true"></meta>
            </Helmet>
            <h1>{title}</h1>
            {text !== undefined && <p className="body">{text}</p>}
        </div>
    )
}