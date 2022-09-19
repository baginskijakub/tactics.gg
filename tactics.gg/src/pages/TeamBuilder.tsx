import React, { useState, useEffect, useReducer } from "react";
import "./pages.css";
import Board from "../components/builder/Board";
import Units from "../components/builder/Units";
import { Item, UnitHex, BuilderTrait } from "../classes";
import Traits from "../components/builder/Traits";
import ItemsEquipped from "../components/builder/ItemsEquipped";
import Items from "../components/builder/Items";
import unitsData from '../components/builder/units-data.json'
import traitsData from '../components/builder/Tratis.json'
import { units } from "../sample-comp-data";

export const TeamBuilder: React.FC = () => {
  const forceUpdate = React.useReducer(() => ({}), {})[1] as () => void;

  let placeholder: UnitHex = new UnitHex(null, null, null, null, 0, null);

  const [board, setBoard] = useState([[placeholder,placeholder,placeholder,placeholder,placeholder,placeholder,placeholder,],[placeholder,placeholder, placeholder,placeholder,placeholder,placeholder,placeholder,],[placeholder,placeholder,placeholder,placeholder,placeholder,placeholder,placeholder,],[placeholder,placeholder,placeholder,placeholder,placeholder,placeholder,placeholder,],]);
    const [traits, setTraits] = useState<any[]>([])

  function changeStarLevel(row: number, column: number, level: 0 | 1 | 2 | 3) {
    forceUpdate();
    var tempBoard: UnitHex[][] = board;
    tempBoard[row][column].level = level;
    forceUpdate();
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
    console.log("chuj dupa")
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
                                        console.log(trait.name)
                                        traitData.effects.forEach(effect => {
                                            console.log(effect.minUnits)
                                            if(effect.minUnits <= (tempValue + trait.value)){
                                                console.log(effect.style + "  to styl")
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

  const draggableElements = document.querySelectorAll(".draggable");
  const droppableElements = document.querySelectorAll(".droppable");

  function dragStart(event: any) {
    event.dataTransfer.setData("text", event.target.id);
  }

  function dragOver(event: any) {
    event.preventDefault();
  }

  function drop(event: any) {
    event.preventDefault();
    var tempBoard: UnitHex[][] = board;

    console.log(event.dataTransfer.getData("text"));

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
        console.log(arrDropped);
        const rowDropped = arrDropped[0];
        const columnDropped = arrDropped[1];
        const unitDropped: UnitHex = JSON.parse(arrDropped[2]);
        // console.log(event.dataTransfer.getData("text"))
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
    forceUpdate();
    updateBoard(tempBoard);
    forceUpdate();
    event.stopImmediatePropagation();
  }

  useEffect(() => {
    droppableElements.forEach((element) => {
      element.addEventListener("dragover", dragOver);
      element.addEventListener("drop", drop);
    });

    draggableElements.forEach((element) => {
      element.addEventListener("dragstart", dragStart);
    });
  }, [board, draggableElements, droppableElements]);

  return (
    <div className="builder-horizontal-wrapper">
      <div className="builder-vertical-container-secondary">
        <Traits traits={traits}/>
      </div>
      <div className="builder-vertical-container-primary">
        <Board matrix={board} changeLevel={changeStarLevel} />
        <Units />
      </div>
      <div className="builder-vertical-container-secondary">
        <ItemsEquipped />
        <Items />
      </div>
    </div>
  );
};

export default TeamBuilder;
