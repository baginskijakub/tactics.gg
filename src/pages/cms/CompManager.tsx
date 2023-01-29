import React from 'react'
import './cms.css'

//components
import {Comp} from "../../components/comp/Comp"
import { PrimaryButton } from '../../components/buttons/PrimaryButton'
import { Dropdown } from '../../components/buttons/Dropdown'

//classes
import {Comp as CompClass} from '../../classes'

//functions
import {changeVisibility, deleteComp} from '../../model/ModelCMS'

interface Props{
    visibility: boolean
    comp: CompClass
    id: number
}

export const CompManager:React.FC<Props> = ({comp, visibility, id}) => {

  function onDelete(){
    deleteComp(id).then(res => {
      console.log(res)
    })
    console.log("deleted")
  }

  function onVisibilityChange(){
    changeVisibility(id, !visibility).then(res => {
      console.log(res)
    })
  }

  return (
    <div className='comp-manager-wrapper'>
        <div className='comp-manager-inner'>
            <Dropdown name="Visibility" values={["True", "False"]} defaultValue="True" onChange={onVisibilityChange}/>
            <PrimaryButton text='Delete' fn={onDelete}/>
        </div>
        <Comp units={comp.units} traits={comp.traits} avgPlacement={comp.avgPlacement} top4Ratio={comp.avgPlacement} winrate={comp.winrate} playrate={comp.playrate} positioning={comp.positioning} items={comp.items} augments={comp.augments} variations={comp.variations} />
    </div>
  )
}