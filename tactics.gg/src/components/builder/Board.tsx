import React from "react";
import "./builder.css";
import { UnitHex } from "../../classes";
import HexUnit from "./HexUnit";
import deleteIcon from '../../images/icons/delete.svg'

interface Props {
  matrix: UnitHex[][];
  changeLevel: (row: number, column: number, level: 0 | 1 | 2 | 3) => void;
  clearBoard: () => void;
}

export const Board: React.FC<Props> = ({ matrix, changeLevel, clearBoard }) => {
  return (
    <div className="builder-board-wrapper">
      <div className="builder-board-clear-button" onClick={() => clearBoard()}>
          <img src={deleteIcon} alt="delete"/>
          <h5>Clear board</h5>
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
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Board;
