import React, { useEffect, useState } from 'react'
import {PageHead} from './PageHead'
import './pages.css'
import { getAugmentsData } from '../components/upcomingSet/util'

export const Set8:React.FC = () => {
  const[img, setImg] = useState("")

  useEffect( () => {
    getAugmentsData().then((res:any) => {
      console.log(res)
      res.data.items.forEach((item: any) => {
        if(item.apiName === 'TFT8_Augment_AegisEmblem'){
          let iconUrl  = item.icon.toLowerCase().replace("hexcore", "choiceui");
          let arr: string[] = iconUrl.split(".");
          let finalUrl: string = arr[0] + "." + arr[1] + "." + "png"
          console.log(finalUrl)
          setImg(`https://raw.communitydragon.org/pbe/game/${finalUrl}`)
        }
      })
    })

  }, [])

  return (
    <div>
        <h1>Set 8 tests</h1>
        <img src={img}/>
    </div>
  )
}

export default Set8