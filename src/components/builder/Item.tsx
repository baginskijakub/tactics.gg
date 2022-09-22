import React from "react";
import "./builder.css";
import { Item as ItemClass } from "../../classes";
import { styled } from "@mui/material/styles";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";

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
}

export const Item: React.FC<Props> = ({ id, name }) => {
  let url: string = "https://ittledul.sirv.com/Images/items/" + id + ".png";
  let itemObj: ItemClass = new ItemClass(id, name, url);

  return (
    <DefaultTooltip
      title={name}
      placement="top"
      PopperProps={{
        modifiers: [
          {
            name: "offset",
            options: {
              offset: [0, -8],
            },
          },
        ],
      }}
    >
      <img
        className="builder-items-item draggable"
        src={`https://ittledul.sirv.com/Images/items/${id}.png`}
        id={itemObj.changeToJSON()}
        alt="item"
        draggable={true}
      />
    </DefaultTooltip>
  );
};

export default Item;
