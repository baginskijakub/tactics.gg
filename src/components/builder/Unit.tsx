import React from "react";
import star from "../../images/icons/star.svg";
import { styled } from "@mui/material/styles";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import "../unit/unit.css";
import "./builder.css";
import { Unit as UnitClass, Item } from "../../classes";

const DefaultTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#0E1828",
    border: "1px solid #172C49",
  },
}));

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
  id,
  name,
  cost,
  url,
  size,
  level,
  items,
}) => {
  const transferUnit = new UnitClass(id, name, cost, url, level, items);

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
            return <img src={star} alt="star" />;
          })}
        </div>
        <img className={`unit-image ${borderColor}`} src={url} alt={name} />
        <div className="item-container">
          {items !== null &&
            items.map((itemElement) => (
              <img src={itemElement.url} alt={itemElement.name} />
            ))}
        </div>
      </div>
    );
  else if (size === "medium") {
    return (
      <div className="unit-container">
        <div className="star-container-medium">
          {stars.map(() => {
            return <img src={star} alt="star" />;
          })}
        </div>
        <img
          className={`unit-image-medium ${borderColor}`}
          src={url}
          alt={name}
        />
        <div className="item-container-medium">
          {items !== null &&
            items.map((itemElement) => (
              <img src={itemElement.url} alt={itemElement.name} />
            ))}
        </div>
      </div>
    );
  } else {
    return (
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
        <div className="unit-container draggable" draggable={true} id={transferUnit.changeToJSON()}>
          <div className="star-container-small">
            {stars.map(() => {
              return <img src={star} alt="star" loading="lazy" title="start"/>;
            })}
          </div>
          <img
            draggable={true}
            className={`unit-image-small ${borderColor}`}
            src={url}
            alt={name}
            id={transferUnit.changeToJSON()}
            loading="lazy"
            title="Unit"
          />
          <div className="item-container-small">
            {items !== null &&
              items.map((itemElement) => (
                <img src={itemElement.url} alt={itemElement.name} />
              ))}
          </div>
        </div>
      </DefaultTooltip>
    );
  }
};
