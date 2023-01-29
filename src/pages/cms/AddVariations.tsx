import React, {useState, useEffect} from 'react'

import './cms.css'

//components
import {Units} from '../../components/builder/Units'
import { Items } from '../../components/builder/Items'
import {Unit} from '../../components/builder/Unit'
import { SecondaryButton } from '../../components/buttons/SecondaryButton'
import { PrimaryButton } from '../../components/buttons/PrimaryButton'
import { Comp } from '../../components/comp/Comp'

//classes
import { Unit as UnitClass, Item as ItemClass, Comp as CompClass, Variation} from "../../classes";

//server
import {saveComp} from '../../model/ModelCMS'

interface Props{
    updateComp: (comp: CompClass) => void
    comp: CompClass
}

export const AddVariations:React.FC<Props> = ({updateComp, comp}) => {
    let placeholder = new UnitClass(0, "", 0, "", 0, [], false)
    let placeholderArray = [placeholder, placeholder, placeholder, placeholder, placeholder, placeholder, placeholder, placeholder]
    
    const [units, setUnits] = useState(placeholderArray)

    function changeCoreAtIndex(index: number){
        console.log("Button clicked")
        //forcing rerender by not using the same reference
        let tempUnits:UnitClass[] = []
        units.forEach(unit => {
            tempUnits.push(unit)
         })

         tempUnits[index].isCore = !tempUnits[index].isCore

         setUnits(tempUnits)
    }

    function dragStart(event: any) {
        let obj = event.target
    
        if(!obj.closest('.draggable')){
          return;
        }
        event.dataTransfer.setData("text", obj.id);
    }
    
    function dragOver(event: any) {
        event.preventDefault();
    }

    function drop(event: any) {
        let dropzone = event.target;
        event.preventDefault();

        //forcing rerender by not using the same reference
        let tempUnits:UnitClass[] = []
        units.forEach(unit => {
            tempUnits.push(unit)
            console.log(unit)
        })

        console.log("Data transfer:", event.dataTransfer.getData("text"))
        console.log("Target id:", event.target.id)
        

        let draggedElementType = event.dataTransfer.getData("text").split("?")[0]
        let draggedElementData = event.dataTransfer.getData("text").split("?")[1]
        let droppedElementId = parseInt(event.target.id)

        if(draggedElementType === "Unit"){
            let unitDragged: UnitClass = JSON.parse(draggedElementData)
            tempUnits[droppedElementId] = unitDragged;
        }
        else if(draggedElementType === "Item"){

            //check if there is a unit on the spot
            if(tempUnits[droppedElementId].name !== ""){
                let itemDragged: ItemClass = JSON.parse(draggedElementData)
                tempUnits[droppedElementId].items?.push(itemDragged)
            }

        }
        setUnits(tempUnits)
        tempUnits = [];
        event.stopImmediatePropagation();
    }

    useEffect(() => {
        const draggableElements = document.getElementsByClassName("draggable");
        const droppableElements = document.getElementsByClassName("droppable");
  
        for(let i = 0; i< draggableElements.length; i++){
              draggableElements[i].addEventListener("dragstart", dragStart);
        }
  
        for(let i = 0; i< droppableElements.length; i++){
              droppableElements[i].addEventListener("dragover", dragOver);
              droppableElements[i].addEventListener("drop", drop);
        }
        
        return () => { // Cleanup callback
  
          for(let i = 0; i< draggableElements.length; i++){
                draggableElements[i].removeEventListener("dragstart", dragStart);
          }
  
          for(let i = 0; i< droppableElements.length; i++){
                droppableElements[i].removeEventListener("dragover", dragOver);
                droppableElements[i].removeEventListener("drop", drop);
          }
        }
    }, [units]);

    function onAdd(){
        let variationUnits: UnitClass[] = []
        units.forEach(unit => {
            if(unit.id !== 0){
                variationUnits.push(unit)
            }
        })
        let variations: Variation[] = comp.variations
        variations.push(new Variation(0,0,variationUnits, []))
        updateComp(new CompClass(comp.units, comp.traits, comp.avgPlacement, comp.top4Ratio, comp.winrate, comp.playrate, comp.positioning, comp.items, comp.augments, variations))
    }   

    function onComplete(){
        saveComp(comp)
    }

  return (
    <div className='page-wrapper'>
        <div className='page-head'>
            <h1>Add new comp</h1>
            <h3>Step 3 of 3</h3>
            <div className='continue-wrapper'>
                <p className='body'>Drag and drop all units of a variation, select core units as those that need to be played to consider a given final board this comp. Insert best in slot items for all the units.</p>
                <PrimaryButton text='Add' fn={onAdd}/>
                <SecondaryButton text='Complete' fn={onComplete}/>
            </div>
        </div>
        <Comp units={comp.units} traits={comp.traits} avgPlacement={comp.avgPlacement} top4Ratio={comp.avgPlacement} winrate={comp.winrate} playrate={comp.playrate} positioning={comp.positioning} items={comp.items} augments={comp.augments} variations={comp.variations} />
        <div className='spots-container'>
            {units.map((unit, index) => {
                return(
                    <Unit id={unit.id} name={unit.name} url={unit.url} cost={unit.cost} size="big" level={unit.level} items={unit.items} index={index} isCore={unit.isCore} onChangeCore={changeCoreAtIndex}/>
                )
            })}
        </div>
        <div className='units-items-container'>
            <Units onChange={()=>{}}/>
            <Items/>
        </div>
    </div>
  )
}
