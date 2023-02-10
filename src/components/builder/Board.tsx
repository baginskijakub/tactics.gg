import React from "react";
import {renderToStaticMarkup} from 'react-dom/server'
import "./builder.css";
import { UnitHex } from "../../classes";
import {HexUnit} from "./HexUnit";
import deleteIcon from '../../images/icons/delete.svg'
import linkIcon from '../../images/icons/link.svg'
import embedIcon from '../../images/icons/embed.svg'

interface Props {
  matrix: UnitHex[][];
  changeLevel: (row: number, column: number, level: 0 | 1 | 2 | 3) => void;
  clearBoard: () => void;
  copyLink: () => void
  removeFromBoard: (row:number, column:number) => void
}

export const Board: React.FC<Props> = ({ matrix, changeLevel, clearBoard, removeFromBoard, copyLink }) => {

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

  function handleEmbed(){
    console.log(renderToStaticMarkup(<Board matrix={matrix} changeLevel={() => {}} clearBoard={() => {}} copyLink={() => {}} removeFromBoard={() => {}} />))
  }

  const func = () => {
    
  }

  return (
    <div className="builder-board-wrapper">
      <div className="builder-board-buttons-container">
        <div className="builder-board-clear-button" onClick={() => clearBoard()}>
            <img src={deleteIcon} alt="delete"/>
            <h5>Clear board</h5>
        </div>
        <div className="builder-board-embed-button" onClick={() => handleEmbed()}>
            <img src={embedIcon} alt="embed"/>
            <h5 id="copy-link">Embed</h5>
        </div>
        <div className="builder-board-copy-button" onClick={() => handleCopy()}>
            <img src={linkIcon} alt="delete"/>
            <h5 id="copy-link">Copy link</h5>
        </div>
      </div>
      {matrix.map((array, i) => {
        return (
          <div className="builder-board-row">
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
