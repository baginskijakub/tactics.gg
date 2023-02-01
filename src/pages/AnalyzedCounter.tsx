import React, { useEffect, useState } from 'react'
import './pages.css'
import { getAnalyzedCounterData } from '../model/Model'

export const AnalyzedCounter:React.FC = () => {
  const [comps, setComps] = useState<number>(0)
  const [time, setTime] = useState<string>("")

  useEffect(() => {
    getAnalyzedCounterData().then((res) => {
      setComps(res.data.analyzedComps)
      setTime(res.data.lastChange)
    })
  }, [])
  if(comps !== 0){
    return (
      <div className='analyzed-counter-wrapper'>
          <div className='analyzed-counter-inner'>
              <p className='body-small'>Analyzed comps:</p>
              <h5 className="analyzed-counter-value">{comps}</h5>
          </div>
          <div className='analyzed-counter-inner'>
              <p className='body-small'>Last change:</p>
              <h5 className="analyzed-counter-value">{time}</h5>
          </div>
      </div>
    )
  }
  else{
    return(<></>)
  }

}

export default AnalyzedCounter