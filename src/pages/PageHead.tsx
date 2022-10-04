import React from 'react'
import './pages.css'
import {Helmet} from "react-helmet"
import ggIcon from '../images/icons/gg_logo.png'

interface Props{
    title: string
    text?: string
}
export const PageHead:React.FC<Props> = ({title, text}) => {
    return (
        <div className="page-head-wrapper">
            <Helmet>
                <title>{title}</title>
                <link rel="icon" href={ggIcon}></link>
            </Helmet>
            <h2>{title}</h2>
            {text !== undefined && <p className="body">{text}</p>}
        </div>
    )
}

export default PageHead
