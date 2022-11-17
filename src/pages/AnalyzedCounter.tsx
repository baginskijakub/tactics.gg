import React from 'react'
import './pages.css'

export const AnalyzedCounter:React.FC = () => {
  return (
    <div className='analyzed-counter-wrapper'>
        <div className='analyzed-counter-inner'>
            <p className='body-small'>Analyzed comps:</p>
            <h5 className="analyzed-counter-value">332 897</h5>
        </div>
        <div className='analyzed-counter-inner'>
            <p className='body-small'>Last change:</p>
            <h5 className="analyzed-counter-value">11 hours ago</h5>
        </div>
    </div>
  )
}

export default AnalyzedCounter