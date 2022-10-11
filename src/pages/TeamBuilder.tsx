import React, { useState, useEffect} from "react";
import "./pages.css";
import {Board} from "../components/builder/Board";
import {Units} from "../components/builder/Units";
import { Item, UnitHex, BuilderTrait, Analysis as AnalysisClass, AnalysisItem, AnalysisUnit, Augment, Unit } from "../classes";
import {Traits} from "../components/builder/Traits";
import {Analyze} from "../components/builder/Analyze";
import {Items} from "../components/builder/Items";
import unitsData from '../components/builder/units-data.json'
import traitsData from '../components/builder/Tratis.json'
import {Analysis} from "../components/builder/Analysis";
import {PageHead} from './PageHead'
import { postComp } from "../model/Model";

export const TeamBuilder: React.FC = () => {

  let placeholder: UnitHex = new UnitHex(null, null, null, null, 0, null);
  const initialState = [[placeholder,placeholder,placeholder,placeholder,placeholder,placeholder,placeholder,],[placeholder,placeholder, placeholder,placeholder,placeholder,placeholder,placeholder,],[placeholder,placeholder,placeholder,placeholder,placeholder,placeholder,placeholder,],[placeholder,placeholder,placeholder,placeholder,placeholder,placeholder,placeholder]] 
  const [board, setBoard] = useState(initialState);
  const [traits, setTraits] = useState<any[]>([])
  const [analysis, setAnalysis] = useState<any>("")
  const [unitsSupport, setUnitsSupport] = useState(0)

  function onUnitsChange(){
    let temp = unitsSupport;
    setUnitsSupport(temp+1);
  }

  function analyze(){
    setAnalysis("Loading")
    const arr:any = []
    board.forEach(row => {
      row.forEach(unit => {
          if(unit.name !== null){
            let items: any = []
            if(unit.items !== null){
              unit.items.map( item =>
                items.push({"id" : item.id, "name" : item.name})
              )
            }
            arr.push({
              "name": unit.id,
              "level": unit.level,
              "items": items
            })
          }
        }
      )
    })
    postComp(arr).then((res:any) => {
      console.log(res.data.error)
      if(res.data === ""){
        setAnalysis("Wait")
      }
      else if(res.data.info === "no matches with this composition were found"){
        setAnalysis("No matches with this composition were found")
      }
      else if(res.data.info === "No matches"){
        setAnalysis("No matches with this composition were found")
      }
      else if(res.data.error === "error - Request failed with status code 429"){
        setAnalysis("Wait")
      }
      else{
        let units: AnalysisUnit[] = []
        res.data.units.forEach((unit: any) => {
          let items: AnalysisItem[] = [];
          unit.items.forEach((item: any) => {
            items.push(new AnalysisItem(item.name, item.id, item.avgPlace, item.playRate))
          })
          units.push(new AnalysisUnit(unit.name, unit.id, items))
        });
        let augments: Augment[] = []
        res.data.augments.forEach((augment: any) => {
          augments.push(new Augment(augment.name, augment.name, augment.avgPlace, augment.winRate, augment.playRate))
        })
        setAnalysis(new AnalysisClass(res.data.top4Ratio, res.data.winRate, res.data.avgPlace, res.data.playRate, units, augments))
      }
    })
  }

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

    if (event.dataTransfer.getData("text")[1] === "-") {
      if (event.target.id.length === 3) {
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
      } else {
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
    } else {
      const position = event.target.id;
      const row = position[0];
      const column = position[2];
      const data = JSON.parse(event.dataTransfer.getData("text"));

      if (data.cost !== undefined) {
        const draggableElementData: UnitHex = JSON.parse(
          event.dataTransfer.getData("text")
        );
        tempBoard[row][column] = new UnitHex(
          draggableElementData.id,
          draggableElementData.name,
          draggableElementData.cost,
          draggableElementData.url,
          draggableElementData.level,
          draggableElementData.items
        );
      } else {
        const draggableElementData: Item = JSON.parse(
          event.dataTransfer.getData("text")
        );
        let unit = tempBoard[row][column];
        if (unit!.items!.length < 3) {
          tempBoard[row][column].items?.push(draggableElementData);
        }
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

  return (
    <div className="builder-wrapper-outer">
        <PageHead 
          title="TFT Team Builder and Analyzer"
          text="Create your own composition and analyze its performance. Drag and drop units to create your own comp!"
          canonical="/teambuilder"
          />
        <Analysis 
          analysis={analysis}
          />
      <div className="builder-horizontal-wrapper">
        <div className="builder-vertical-container-secondary">
          <Traits traits={traits}/>
        </div>
        <div className="builder-vertical-container-primary">
          <Board matrix={board} changeLevel={changeStarLevel} removeFromBoard={removeFromBoard} clearBoard={clearBoard}/>
          <Units onChange={onUnitsChange}/>
        </div>
        <div className="builder-vertical-container-secondary">
          <Analyze 
            buttonClick={analyze}
            />
          <Items />
        </div>
      </div>
    </div>
  );
};
