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
              <p className="analyzed-counter-value body-small">{comps}</p>
          </div>
          <div className='analyzed-counter-inner'>
              <p className='body-small'>Last change:</p>
              <p className="analyzed-counter-value body-small">{time}</p>
          </div>
      </div>
    )
  }
  else{
    return(<></>)
  }

}

export default AnalyzedCounter