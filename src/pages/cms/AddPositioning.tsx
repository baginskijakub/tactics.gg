import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

import './cms.css'
import '../pages.css'

//components
import {Units} from '../../components/builder/Units'
import { Items } from '../../components/builder/Items'
import { Traits } from '../../components/builder/Traits'
import {Unit} from '../../components/builder/Unit'
import {Board} from '../../components/builder/Board'
import { SecondaryButton } from '../../components/buttons/SecondaryButton'
import { PrimaryButton } from '../../components/buttons/PrimaryButton'
import { Comp } from '../../components/comp/Comp'

//classes
import { Unit as UnitClass, Item as ItemClass} from "../../classes";
import { Item, UnitHex, BuilderTrait, Analysis as AnalysisClass, AnalysisItem, AnalysisUnit, Augment, Comp as CompClass, Trait as TraitClass } from "../../classes";

//data
import unitsData from '../../components/builder/units-data.json'
import traitsData from '../../components/builder/Tratis.json'

interface Props{
  updateComp: (comp: CompClass) => void
  comp: CompClass
}

export const AddPositioning:React.FC<Props> = ({updateComp, comp}) => {
    let placeholder: UnitHex = new UnitHex(null, null, null, null, 0, null);
    const initialState = [[placeholder,placeholder,placeholder,placeholder,placeholder,placeholder,placeholder,],[placeholder,placeholder, placeholder,placeholder,placeholder,placeholder,placeholder,],[placeholder,placeholder,placeholder,placeholder,placeholder,placeholder,placeholder,],[placeholder,placeholder,placeholder,placeholder,placeholder,placeholder,placeholder]] 
    const [board, setBoard] = useState(initialState);
    const [traits, setTraits] = useState<BuilderTrait[]>([])
    const [unitsSupport, setUnitsSupport] = useState(0)
    let navigate = useNavigate();


  function clearBoard(){
    updateBoard(initialState)
  }

  function removeFromBoard(row: number, column: number){
    let tempBoard: UnitHex[][] = initialState;
    board.forEach((boardRow, rowNo) => {
      boardRow.forEach((boardColumn, columnNo) => {
        if(row === rowNo && column === columnNo){
          tempBoard[row][column] = placeholder;
        }
        else{
          tempBoard[rowNo][columnNo] = board[rowNo][columnNo];
        }
      })
    })
    updateBoard(tempBoard);
  }

  function changeStarLevel(row: number, column: number, level: 0 | 1 | 2 | 3) {
    var tempBoard: UnitHex[][] = board;
    tempBoard[row][column].level = level;
    setBoard(tempBoard);
  }

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
        uniqueUnits.forEach(unit => {
            unitsData.forEach(unitData => {
                if(unit === unitData.id){
                    unitData.traits.forEach(trait => {
                        if(isActiveTrait(trait.name)){
                            tempTraits.forEach((tempTrait, index) => {
                                if(tempTrait.name === trait.name){
                                    let style = 0;
                                    let tempValue = tempTrait.active
                                    traitsData.traits.forEach(traitData => {
                                        if(traitData.name === trait.name){
                                            traitData.effects.forEach(effect => {
                                                if(effect.minUnits <= (tempValue + trait.value)){
                                                    style = effect.style;
                                                }
                                            })
                                        }
                                    })
                                    tempTraits[index].active = tempValue + trait.value
                                    tempTraits[index].style = style
                                }
                            })
                        }
                        else{
                            let breakpoints: any[] = []
                            let style: number = 0;
                            traitsData.traits.forEach(traitData => {
                                if(traitData.name === trait.name){
                                    traitData.effects.forEach(effect => {
                                        breakpoints.push(effect.minUnits)
                                        if(effect.minUnits <= trait.value){
                                            style = effect.style;
                                        }
                                    })
                                }
                            })
                            tempTraits.push(new BuilderTrait(trait.name, trait.value, breakpoints, style))
                        }
    
                    })
                }
            })
        })
        setTraits(tempTraits)
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
        var tempBoard: UnitHex[][] = board;
    

        let draggedElementType = event.dataTransfer.getData("text").split("?")[0]
        let draggedElementData = event.dataTransfer.getData("text").split("?")[1]
        let droppedElementRow = event.target.id[0]
        let droppedElementColumn = event.target.id[2]
        // console.log("Target row:", droppedElementRow);
        // console.log("Target column:", droppedElementColumn);
        // console.log("Dragged type: ", draggedElementType)
        // console.log("Dragged data", draggedElementData)

        //check if dropped to an empty field
        if(event.target.id.length < 4){
            //check if dragged is Unit from the box below board
            if(draggedElementType === "Unit"){
                const unitDragged: UnitHex = JSON.parse(draggedElementData);
                tempBoard[droppedElementRow][droppedElementColumn] = new UnitHex(
                  unitDragged.id,
                  unitDragged.name,
                  unitDragged.cost,
                  unitDragged.url,
                  unitDragged.level,
                  unitDragged.items
                );
            }
            //check if dragged is Unit from the board
            else if(event.dataTransfer.getData("text")[1] === "-"){
                const position = event.target.id;
                const rowDropped = position[0];
                const columnDropped = position[2];
                let data = event.dataTransfer.getData("text");
                let arr = data.split("-");
                const rowDragged = arr[0];
                const columnDragged = arr[1];
                const unitDragged: UnitHex = JSON.parse(arr[2]);
                tempBoard[rowDropped][columnDropped] = new UnitHex(
                  unitDragged.id,
                  unitDragged.name,
                  unitDragged.cost,
                  unitDragged.url,
                  unitDragged.level,
                  unitDragged.items
                );
                tempBoard[rowDragged][columnDragged] = placeholder;
            }
        }
        else{

            if(draggedElementType === "Item"){
                const itemDragged: Item = JSON.parse(draggedElementData);
                let unit = tempBoard[droppedElementRow][droppedElementColumn];
                if (unit!.items!.length < 3) {
                  tempBoard[droppedElementRow][droppedElementColumn].items?.push(itemDragged);
                }

            }
            else if(event.dataTransfer.getData("text")[1] === "-"){
                const dataDropped = event.target.id;
                let arrDropped = dataDropped.split("-");
                const rowDropped = arrDropped[0];
                const columnDropped = arrDropped[1];
                const unitDropped: UnitHex = JSON.parse(arrDropped[2]);
                let data = event.dataTransfer.getData("text");
                let arrDragged = data.split("-");
                const rowDragged = arrDragged[0];
                const columnDragged = arrDragged[1];
                const unitDragged: UnitHex = JSON.parse(arrDragged[2]);
                tempBoard[rowDragged][columnDragged] = new UnitHex(
                  unitDropped.id,
                  unitDropped.name,
                  unitDropped.cost,
                  unitDropped.url,
                  unitDropped.level,
                  unitDropped.items
                );
                tempBoard[rowDropped][columnDropped] = new UnitHex(
                  unitDragged.id,
                  unitDragged.name,
                  unitDragged.cost,
                  unitDragged.url,
                  unitDragged.level,
                  unitDragged.items
                );
            }
        }


        updateBoard(tempBoard);
        tempBoard = [];
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
  
  }, [board, traits, unitsSupport]);

  function onContinue(){
    navigate("/AddVariations")
  }

  function onApply(){
    let compTraits: TraitClass[] = []
    traits.forEach(trait => {
      if(trait.style > 0){
        compTraits.push(new TraitClass(trait.name, trait.active, trait.style, `https://ittledul.sirv.com/Images/traits/${trait.name.toLowerCase()}.png`))
      }
    })
    updateComp(new CompClass(comp.units, compTraits, comp.avgPlacement, comp.top4Ratio, comp.winrate, comp.playrate, board, comp.items, comp.augments, comp.variations))
  }


  return (
    <div className='page-wrapper'>
        <div className='page-head'>
            <h1>Add new comp</h1>
            <h3>Step 2 of 3</h3>
            <div className='continue-wrapper'>
                <p className='body'>Drag and drop all units of the composition, positioning now does matter. Put best in slot items on units that have been previously selected as core units</p>
                <PrimaryButton text='Apply' fn={onApply}/>
                <SecondaryButton text='Continue' fn={onContinue}/>
            </div>
            <Comp units={comp.units} traits={comp.traits} avgPlacement={comp.avgPlacement} top4Ratio={comp.avgPlacement} winrate={comp.winrate} playrate={comp.playrate} positioning={comp.positioning} items={comp.items} augments={comp.augments} variations={comp.variations} />
            <Traits traits={traits}/>
        <div className="builder-horizontal-wrapper">

            <div className="builder-vertical-container-primary">
                <Board matrix={board} changeLevel={changeStarLevel} removeFromBoard={removeFromBoard} clearBoard={clearBoard} copyLink={()=>{}}/>
                <Units onChange={()=>{}}/>
            </div>
        <div className="builder-vertical-container-secondary">
            <Items />
        </div>
        </div>
        </div>
    </div>
  )
}
