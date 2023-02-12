import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import star from "../../images/icons/star.svg";
import "./embedUnit.css";

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
  level: 0 | 1 | 2 | 3;
  items: Item[] | null;
  row: number;
  column: number;
}

export const HexUnit: React.FC<Props> = ({
  name,
  cost,
  url,
  level,
  items,
}) => {

  var backgroundClass: string = "embed-hexagon-in2";

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

    if (name !== null) {
      return (
        <div
          className="embed-unit-hex-container-medium"
        >
          <div className="embed-star-container">
            {level > 0 && (
              <img src={star} alt="star"/>
            )}
            {level > 1 && (
              <img src={star} alt="star"  />
            )}
            {level > 2 && (
              <img src={star} alt="star" />
            )}
          </div>
          <div className="embed-hexagon embed-hex-border">
            <div className="embed-hexagon-in1">
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
            <div className="embed-hexagon embed-hex-image">
              <div className="embed-hexagon-in1">
                <div
                  className="embed-hexagon-in2"
                  style={{ backgroundImage: `url(${url})` }}
                ></div>
              </div>
            </div>
          </DefaultTooltip>
          <div className="embed-item-container">
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
        </div>
      );
    } else {
      return (
        <div className="embed-unit-hex-container-medium">
          <div className="embed-star-container">
            {stars.map(() => {
              return <img src={star} alt="star" />;
            })}
          </div>
          <div className="embed-hexagon embed-hex-border">
            <div className="embed-hexagon-in1">
              <div className={backgroundClass}></div>
            </div>
          </div>
          <div className="embed-hexagon embed-hex-image">
            <div className="embed-hexagon-in1">
              <div
                className="embed-hexagon-in2"
                style={{ backgroundImage: `url(${url})` }}
              ></div>
            </div>
          </div>
          <div className="embed-item-container">
            {items !== null &&
              items.map((itemElement) => (
                <img src={itemElement.url} alt={itemElement.name} />
              ))}
          </div>
        </div>
      );
  }
};