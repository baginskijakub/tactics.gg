import React from 'react'
import './pages.css'

interface Props{
    title: string
    text?: string
}
export const PageHead:React.FC<Props> = ({title, text}) => {
    return (
        <div className="page-head-wrapper">
            <h2>{title}</h2>
            {text !== undefined && <p className="body">{text}</p>}
        </div>
    )
}

export default PageHead
