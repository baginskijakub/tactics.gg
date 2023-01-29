import React, { useEffect, useState } from 'react'
import './cms.css'

//components
import { CompManager } from './CompManager'

//classes
import {Comp as CompClass} from '../../classes'

//functions
import {getCMSComps} from '../../model/ModelCMS'

interface IComp{
  visibility: boolean,
  id: number,
  comp: CompClass
}

export const ManageComps:React.FC = () => {
  const[comps, setComps] = useState<IComp[]>([])

  useEffect( () => {
    getCMSComps().then(res => {
      console.log(res)
      let tempComps: IComp[] = []
      res.data.forEach((comp:any) => {
        tempComps.push({visibility: comp.visibility, id: comp.id, comp: JSON.parse(comp.json)})
      })
      setComps(tempComps)
    })
  }, [])
  return (
    <div className='page-wrapper'>
        {comps.map(comp => {
                return  <CompManager id={comp.id} visibility={comp.visibility} comp={comp.comp}/>
        })}
    </div>
  )
}