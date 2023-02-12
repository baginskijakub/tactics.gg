import React, { useEffect, useState } from "react";
import "./embed.css";
import { UnitHex } from "../../classes";
import {HexUnit} from "./HexUnit";

interface Props {
  matrix: UnitHex[][];
}

export const Board: React.FC<Props> = ({ matrix}) => {

  function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

  useEffect(()=>{
    console.log(matrix)
  })



  return (

    <div className="embed-builder-board-wrapper">
      <div className="embed-builder-board-buttons-container">
        <a className="embed-builder-board-visit body-small" href="https://tactix.gg/"><h4>Visit site</h4></a>
      </div>
      <div></div>
      {matrix.map((array, i) => {
        if(i % 2 == 0){
          return (
            <div className="embed-builder-board-row embed-builder-board-row-even">
              {array.map((element, j) => {
                return (
                  <HexUnit
                    id={element.id}
                    name={element.name}
                    cost={element.cost}
                    url={element.url}
                    level={element.level}
                    items={element.items}
                    row={i}
                    column={j}
                  />
                );
              })}
            </div>
          );
        }
        else{
            return (
              <div className="embed-builder-board-row embed-builder-board-row-odd">
                {array.map((element, j) => {
                  return (
                    <HexUnit
                      id={element.id}
                      name={element.name}
                      cost={element.cost}
                      url={element.url}
                      level={element.level}
                      items={element.items}
                      row={i}
                      column={j}
                    />
                  );
                })}
              </div>
            );
      }})}
    </div>
  );
};
