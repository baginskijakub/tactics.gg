import React from "react";
import star from "../../images/icons/star.svg";
import "./unit.css";

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
}

export const HexagonUnit: React.FC<Props> = ({
  id,
  name,
  cost,
  url,
  size,
  level,
  items,
}) => {
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
          <div className="hexagon-in1" style={{backgroundColor: "red", zIndex: 3}}>
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
    return (
      <div className="unit-hex-container-medium">
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
              className="hexagon-in2"
              style={{ backgroundImage: `url(${url})` }}
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
};

export default HexagonUnit;
