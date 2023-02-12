import React, { useEffect, useState } from "react";
import "./builder.css";
import { UnitHex } from "../../classes";
import {HexUnit} from "./HexUnit";
import deleteIcon from '../../images/icons/delete.svg'
import linkIcon from '../../images/icons/link.svg'
import embedIcon from '../../images/icons/embed.svg'
import closeIcon from '../../images/icons/close.svg'
import {saveCreatedComp} from '../../model/Model'
import { v4 as uuidv4 } from 'uuid';

interface Props {
  matrix: UnitHex[][];
  changeLevel: (row: number, column: number, level: 0 | 1 | 2 | 3) => void;
  clearBoard: () => void;
  copyLink: () => void
  removeFromBoard: (row:number, column:number) => void
}

export const Board: React.FC<Props> = ({ matrix, changeLevel, clearBoard, removeFromBoard, copyLink }) => {
  let placeholder: UnitHex = new UnitHex(null, null, null, null, 0, null);
  const initialState = [[placeholder,placeholder,placeholder,placeholder,placeholder,placeholder,placeholder,],[placeholder,placeholder, placeholder,placeholder,placeholder,placeholder,placeholder,],[placeholder,placeholder,placeholder,placeholder,placeholder,placeholder,placeholder,],[placeholder,placeholder,placeholder,placeholder,placeholder,placeholder,placeholder]] 
  const [showEmbed, setShowEmbed] = useState<boolean>(false)
  const [placeholderEmbed, setPlaceholderEmbed] = useState<string>('Please insert units into the board before embeding the code.')

  function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

   async function handleCopy(){
    copyLink();
    let element = document.getElementById("copy-link") as HTMLElement;
    element.innerHTML = "Link copied!"
    await sleep(2000);
    element.innerHTML = "Copy link"
  }

  useEffect(()=>{
    console.log(matrix)
  })

  const handleEmbed = () => {
    if(matrix !== initialState ){
      let id = uuidv4();
      saveCreatedComp(id, matrix, undefined);
      setPlaceholderEmbed(`<iframe width="802" height="434" src="https://www.tactix.gg/embed?${id}" title="Powered by TACTIX.GG" frameborder="0"></iframe>`)
      setShowEmbed(true)
    }
    else{
      setShowEmbed(true)
    }
  }

  const closeEmbedModal = () => {
    setShowEmbed(false)
  }

  return (
    <div className="builder-board-wrapper">
      <div className="builder-board-buttons-container">
        <div className="builder-board-clear-button" onClick={() => clearBoard()}>
            <img src={deleteIcon} alt="delete"/>
            <h5>Clear board</h5>
        </div>
        {<div className="builder-board-embed-button" onClick={() => handleEmbed()}>
            <img src={embedIcon} alt="embed"/>
            <h5 id="embed-link">Embed</h5>
        </div>}
        <div className="builder-board-copy-button" onClick={() => handleCopy()}>
            <img src={linkIcon} alt="delete"/>
            <h5 id="copy-link">Copy link</h5>
        </div>
      </div>
      <div>
      {showEmbed && <div className="builder-embed-container">
          <h3>Copy and paste the code below into your code.</h3>
          <span className="horizontal-divider"/>
          <p className="builder-code-to-embed">{placeholderEmbed}</p>
          <img className="builder-embed-close" src={closeIcon} onClick={closeEmbedModal}/>
      </div>}
      </div>
      <div></div>
      {matrix.map((array, i) => {
        let conditionalClass: string = "builder-board-row-"
        if(i % 2 == 0){
          conditionalClass += "even"
        }else{
          conditionalClass += "odd"
        }

        return (
          <div className={`builder-board-row ${conditionalClass}`}>
            {array.map((element, j) => {
              function changeStarLevel(level: 0 | 1 | 2 | 3) {
                changeLevel(i, j, level);
              }
              return (
                <HexUnit
                  id={element.id}
                  name={element.name}
                  cost={element.cost}
                  url={element.url}
                  level={element.level}
                  items={element.items}
                  size="medium"
                  row={i}
                  column={j}
                  changeStarLevel={changeStarLevel}
                  removeFromBoard={removeFromBoard}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
