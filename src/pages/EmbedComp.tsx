import React, {useEffect, useState} from 'react'
import { Board } from '../components/embed/Board'
import {UnitHex} from "../classes";
import { getCreatedComp } from "../model/Model";
import { getAllTraits, getAllUnits } from '../model/DataModel';
import { BuilderTrait } from '../classes';
import Traits from '../components/embed/Traits';
import { useParams } from 'react-router-dom';

export const EmbedComp:React.FC = () => {
    let placeholder: UnitHex = new UnitHex(null, null, null, null, 0, null);
    const initialState = [[placeholder,placeholder,placeholder,placeholder,placeholder,placeholder,placeholder,],[placeholder,placeholder, placeholder,placeholder,placeholder,placeholder,placeholder,],[placeholder,placeholder,placeholder,placeholder,placeholder,placeholder,placeholder,],[placeholder,placeholder,placeholder,placeholder,placeholder,placeholder,placeholder]] 
    const params = useParams()
    const [board, setBoard] = useState<UnitHex[][]>(initialState)
    const [traits, setTraits] = useState<BuilderTrait[]>([])

    function updateBoard(board: UnitHex[][]){
      setBoard(board);
  
      let unitIdList: any[] = []
      board.forEach(row => {
          row.forEach(unit => {
              if(unit.id !== null){
                  unitIdList.push(unit.id)
              }
          })
      });
      let uniqueUnits = unitIdList.filter((element, index) => {
      return unitIdList.indexOf(element) === index;
      });
  
      let tempTraits: BuilderTrait[] = []
  
      function isActiveTrait(name: string){
          let temp = false;
          tempTraits.forEach(trait => {
              if(trait.name === name){
                  temp = true;
              }
          })
          return temp;
      }
  
      getAllTraits().then(allTraits => {
        getAllUnits().then(allUnits => {
          uniqueUnits.forEach(unit => {
              allUnits.forEach(unitData => {
                if(unit === unitData.apiName){
                  unitData.traits.forEach((unitTrait : any) => {
                      if(!isActiveTrait(unitTrait)){
                        allTraits.forEach(traitData => {
                          if(traitData.name === unitTrait){
                            let style = 0;
                            let breakpoints: number[] = []
                            traitData.effects.forEach((effect:any) => {
                              breakpoints.push(effect.minUnits)
                              if(effect.minUnits <= 1){
                                  style = effect.style;
                              }
                          })
                            let urlArr: string[] = traitData.icon.split("/")
                            let traitUrl = urlArr[3]
                            let url = `https://raw.communitydragon.org/latest/game/assets/ux/traiticons/${traitUrl.replace("tex", "png").toLowerCase()}`
                            tempTraits.push(new BuilderTrait(traitData.name, 1, breakpoints, style, url))
                          }
                        })
                      }
                      else{
                        tempTraits.forEach((tempTrait, index) => {
                            if(tempTrait.name === unitTrait){
                              let style = 0;
                              let tempValue = tempTrait.active
                              allTraits.forEach(traitData => {
                                if(traitData.name === tempTrait.name){
                                  traitData.effects.forEach((effect:any) => {
                                    if(effect.minUnits <= tempValue + 1 && effect.maxUnits >= tempValue + 1){
                                          style = effect.style;
                                      }
                                  })
                                }
                              })
                              tempTraits[index].active = tempValue + 1
                              tempTraits[index].style = style
                            }
                      })
                      }
                  })
                }
              })
          })
          setTraits(tempTraits)  
        })
      })
       
    }

    useEffect(() => {
        //fetching data from server if id of comp that someone has created is passed to url
        if(params.embedId !== undefined){
          let tempBoard:UnitHex[][] = [];
          getCreatedComp(params.embedId).then(res => {
            res.data.composition.forEach((row:any, rowNo:number) => {
                tempBoard.push([])
                row.forEach((unit:any, columnNo:number) => {
                if(unit.id !== null){
                    tempBoard[rowNo][columnNo] = new UnitHex(unit.id, unit.name, unit.cost, unit.url, unit.level, unit.items)
                }
                else{
                    tempBoard[rowNo][columnNo] = placeholder
                }
              })
            })
            updateBoard(tempBoard)
          })
        }
      }, [])


        return (
            <div className='embed-wrapper'>
                <Traits traits={traits}/>
                <Board matrix={board} />
            </div>
          )
}

export default EmbedComp