import React, {useState, useEffect, useReducer} from 'react'
import './pages.css'
import Board from '../components/builder/Board'
import Units from '../components/builder/Units'
import { Item, UnitHex } from '../classes'
import Traits from '../components/builder/Traits'
import ItemsEquipped from '../components/builder/ItemsEquipped'
import Items from '../components/builder/Items'

export const TeamBuilder:React.FC = () => {

    const forceUpdate = React.useReducer(() => ({}), {})[1] as () => void

    let placeholder: UnitHex = new UnitHex(null, null, null, null, 0, null);
    
    const[board, setBoard] = useState([[placeholder, placeholder, placeholder, placeholder, placeholder, placeholder, placeholder],[placeholder, placeholder, placeholder, placeholder, placeholder, placeholder, placeholder],[placeholder, placeholder, placeholder, placeholder, placeholder, placeholder, placeholder],[placeholder, placeholder, placeholder, placeholder, placeholder, placeholder, placeholder]]);
    
    function changeStarLevel(row: number, column: number, level: 0 | 1 | 2 | 3){
        forceUpdate();
        var tempBoard: UnitHex[][] = board;
        tempBoard[row][column].level = level;
        forceUpdate();
        setBoard(tempBoard);
    }

    const draggableElements = document.querySelectorAll(".draggable");
    const droppableElements = document.querySelectorAll(".droppable");

    function dragStart(event: any){
        event.dataTransfer.setData("text", event.target.id)
    }

    function dragOver(event: any){
        event.preventDefault();
    }

    function drop(event: any){
        event.preventDefault()
        const position = event.target.id
        const row = position[0]
        const column = position[2]
        var tempBoard: UnitHex[][] = board;

        const data = JSON.parse(event.dataTransfer.getData("text"));
        if(data.cost !== null){
            const draggableElementData: UnitHex = JSON.parse(event.dataTransfer.getData("text"));
            tempBoard[row][column] = new UnitHex(draggableElementData.id, draggableElementData.name, draggableElementData.cost, draggableElementData.url, draggableElementData.level, draggableElementData.items);
        }
        else{
            const draggableElementData: Item = JSON.parse(event.dataTransfer.getData("text"));
            console.log(draggableElementData)
            tempBoard[row][column].items?.push(draggableElementData)
            console.log(tempBoard)
        }
        forceUpdate();
        setBoard(tempBoard);
        forceUpdate();
    }

    useEffect(() => {

        droppableElements.forEach(element => {
            element.addEventListener("dragover", dragOver);
            element.addEventListener("drop", drop);
        })
    
        draggableElements.forEach(element => {
            element.addEventListener("dragstart", dragStart);
        })


    }, [board, draggableElements, droppableElements])


    return (
        <div className="builder-horizontal-wrapper">
            <div className="builder-vertical-container-secondary">
                <Traits />
            </div>
            <div className="builder-vertical-container-primary">
                <Board 
                    matrix={board}
                    changeLevel={changeStarLevel}
                    />
                <Units />
            </div>
            <div className="builder-vertical-container-secondary">
                <ItemsEquipped />
                <Items />
            </div>
        </div>
    )
}

export default TeamBuilder
