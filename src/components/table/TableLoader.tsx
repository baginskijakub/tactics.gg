import React from 'react'
import "../builder/builder.css"

export const TableLoader:React.FC = () => {
    return (
        <div className="table-loader-wrapper">
            <div className="lds-dual-ring"></div>
        </div>
    )
}

export default TableLoader
