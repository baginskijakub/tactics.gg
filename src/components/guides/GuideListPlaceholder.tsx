import React from 'react'
import './guides.css'

export const GuideListPlaceholder:React.FC = () => {
  return (
    <div className="guide-list-wrapper-small guide-list-placeholder">
            <h4>There are no guides matching your search</h4>
    </div>
  )
}

export default GuideListPlaceholder