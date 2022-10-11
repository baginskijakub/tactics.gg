import React from 'react'
import './comp.css'
import '../builder/builder.css'

export const CompLoader:React.FC = () => {
    return (
        <div className="comp-loader-container">
            <div className="lds-dual-ring"></div>
        </div>
    )
}
