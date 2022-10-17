import React from "react";
import star from "../../images/icons/star.svg";
import "./unit.css";

interface Item {
  id: number;
  name: string;
  url: string;
}

interface Props {
  id: number;
  name: string;
  cost: number;
  url: string;
  size: "big" | "medium" | "small";
  level: 0 | 1 | 2 | 3;
  items: Item[] | null;
}
export const Unit: React.FC<Props> = ({
  name,
  cost,
  url,
  size,
  level,
  items,
}) => {
  let stars = new Array<number>();

  for (let i = 0; i < level; i++) {
    stars.push(0);
  }

  var borderColor: string = "grey-border";

  switch (cost) {
    case 2:
      borderColor = "green-border";
      break;
    case 3:
    case 6:
      borderColor = "blue-border";
      break;
    case 4:
    case 7:
      borderColor = "purple-border";
      break;
    case 5:
    case 8:
      borderColor = "yellow-border";
      break;
  }
  if (size === "big")
    return (
      <div className="unit-container">
        <div className="star-container">
          {stars.map(() => {
            return <img src={star} alt="star" title="Unit"/>;
          })}
        </div>
        <img className={`unit-image ${borderColor}`} src={url} alt={name} title="Unit"/>
        <div className="item-container">
          {items !== null &&
            items.map((itemElement) => (
              <img src={itemElement.url} alt={itemElement.name} title="Item"/>
            ))}
        </div>
      </div>
    );
  else if (size === "medium") {
    return (
      <div className="unit-container">
        <div className="star-container-medium">
          {stars.map(() => {
            return <img src={star} alt="star" title="Unit"/>;
          })}
        </div>
        <img
          className={`unit-image-medium ${borderColor}`}
          src={url}
          alt={name}
          loading="lazy"
          title="Unit"
        />
        <div className="item-container-medium">
          {items !== null &&
            items.map((itemElement) => (
              <img src={itemElement.url} alt={itemElement.name} title="Item"/>
            ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className="unit-container">
        <div className="star-container-small">
          {stars.map(() => {
            return <img src={star} alt="star" title="Unit"/>;
          })}
        </div>
        <img
          className={`unit-image-small ${borderColor}`}
          src={url}
          alt={name}
          title="Unit"
        />
        <div className="item-container-small">
          {items !== null &&
            items.map((itemElement) => (
              <img src={itemElement.url} alt={itemElement.name} title="Item"/>
            ))}
        </div>
      </div>
    );
  }
};