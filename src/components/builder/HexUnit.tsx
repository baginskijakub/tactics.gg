import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import star from "../../images/icons/star.svg";
import starHover from "../../images/icons/star-hover.svg";
import remove from "../../images/icons/cancel.png"
import "../unit/unit.css";
import "./builder.css";

const DefaultTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#0E1828",
    border: "1px solid #172C49",
  },
}));

class UnitClass {
  id: number | null;
  name: string | null;
  cost: number | null;
  url: string | null;
  level: 0 | 1 | 2 | 3;
  items: Item[] | null;

  constructor(
    id: number | null,
    name: string | null,
    cost: number | null,
    url: string | null,
    level: 0 | 1 | 2 | 3,
    items: Item[] | null
  ) {
    this.id = id;
    this.name = name;
    this.cost = cost;
    this.url = url;
    this.level = level;
    this.items = items;
  }

  changeToJSON() {
    return JSON.stringify(this);
  }
}

interface Item {
  id: number;
  name: string;
  url: string;
}

interface Props {
  id: number | null;
  name: string | null;
  cost: number | null;
  url: string | null;
  size: "big" | "medium";
  level: 0 | 1 | 2 | 3;
  items: Item[] | null;
  row: number;
  column: number;
  changeStarLevel?: (level: 0 | 1 | 2 | 3) => void;
  removeFromBoard?: (row: number, column: number) => void
}

export const HexUnit: React.FC<Props> = ({
  id,
  name,
  cost,
  url,
  size,
  level,
  items,
  row,
  column,
  changeStarLevel,
  removeFromBoard
}) => {
  const [starsState, setStars] = useState(level);

  function changeLevel(level: 0 | 1 | 2 | 3) {
    setStars(level);
    changeStarLevel?.(level);
  }

  var backgroundClass: string = "hexagon-in2";

  switch (cost) {
    case 1:
      backgroundClass += " grey-fill";
      break;
    case 2:
      backgroundClass += " green-fill";
      break;
    case 3:
    case 6:
      backgroundClass += " blue-fill";
      break;
    case 4:
    case 7:
      backgroundClass += " purple-fill";
      break;
    case 5:
    case 8:
      backgroundClass += " yellow-fill";
      break;
  }
  const stars = new Array<number>();

  for (let i = 0; i < level; i++) {
    stars.push(0);
  }

  if (size === "big") {
    return (
      <div className="unit-hex-container">
        <div className="star-container">
          {stars.map(() => {
            return <img src={star} alt="star" />;
          })}
        </div>
        <div className="hexagon hex-image">
          <div className="hexagon-in1">
            <div
              className="hexagon-in2"
              style={{ backgroundImage: `url(${url})` }}
            ></div>
          </div>
        </div>
        <div className="hexagon hex-border">
          <div className="hexagon-in1">
            <div className={backgroundClass}></div>
          </div>
        </div>

        <div className="item-container">
          {items !== null &&
            items.map((itemElement) => (
              <img src={itemElement.url} alt={itemElement.name} />
            ))}
        </div>
      </div>
    );
  } else {
    let unitOBJ = new UnitClass(id, name, cost, url, level, items);
    let json: string = unitOBJ.changeToJSON();
    if (name !== null) {
      return (
        <div
          className="unit-hex-container-medium droppable draggable"
          draggable={true}
          id={`${row}-${column}-${json}`}
        >
          <div className="star-container">
            {starsState > 0 ? (
              <img src={star} alt="star" onClick={() => changeLevel(0)} />
            ) : (
              <img
                className="start-not-active"
                src={starHover}
                alt="star"
                onClick={() => changeLevel(1)}
              />
            )}
            {starsState > 1 ? (
              <img src={star} alt="star" onClick={() => changeLevel(2)} />
            ) : (
              <img
                className="start-not-active"
                src={starHover}
                alt="star"
                onClick={() => changeLevel(2)}
              />
            )}
            {starsState > 2 ? (
              <img src={star} alt="star" onClick={() => changeLevel(3)} />
            ) : (
              <img
                className="start-not-active"
                src={starHover}
                alt="star"
                onClick={() => changeLevel(3)}
              />
            )}
          </div>
          <div className="hexagon hex-border">
            <div className="hexagon-in1">
              <div className={backgroundClass}></div>
            </div>
          </div>
          <DefaultTooltip
            title={name}
            placement="top"
            PopperProps={{
              modifiers: [
                {
                  name: "offset",
                  options: {
                    offset: [0, -16],
                  },
                },
              ],
            }}
          >
            <div className="hexagon hex-image">
              <div className="hexagon-in1">
                <div
                  className="hexagon-in2 draggable"
                  style={{ backgroundImage: `url(${url})` }}
                  id={`${row}-${column}-${json}`}
                  draggable={false}
                ></div>
              </div>
            </div>
          </DefaultTooltip>
          <div className="item-container">
            {items !== null &&
              items.map((itemElement) => (
                <DefaultTooltip
                  title={itemElement.name}
                  placement="top"
                  PopperProps={{
                    modifiers: [
                      {
                        name: "offset",
                        options: {
                          offset: [0, -16],
                        },
                      },
                    ],
                  }}
                >
                  <img src={itemElement.url} alt={itemElement.name} />
                </DefaultTooltip>
              ))}
          </div>
          {removeFromBoard !== undefined &&
          <div className="unit-hex-remove-button" onClick={() => removeFromBoard(row, column)}>
                <img src={remove} alt="remove"></img>
          </div>}
          
        </div>
      );
    } else {
      return (
        <div className="unit-hex-container-medium  droppable">
          <div className="star-container">
            {stars.map(() => {
              return <img src={star} alt="star" />;
            })}
          </div>
          <div className="hexagon hex-border">
            <div className="hexagon-in1">
              <div className={backgroundClass}></div>
            </div>
          </div>
          <div className="hexagon hex-image">
            <div className="hexagon-in1">
              <div
                className="hexagon-in2 droppable"
                style={{ backgroundImage: `url(${url})` }}
                id={`${row}-${column}`}
              ></div>
            </div>
          </div>
          <div className="item-container">
            {items !== null &&
              items.map((itemElement) => (
                <img src={itemElement.url} alt={itemElement.name} />
              ))}
          </div>
        </div>
      );
    }
  }
};