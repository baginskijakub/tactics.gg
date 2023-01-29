import React, {useEffect} from "react";
import "./builder.css";

interface Props {
  style: number;
  name: string;
  active: number;
  breakpoints: number[];
  url: string
}

export const Trait: React.FC<Props> = ({
  name,
  style,
  active,
  breakpoints,
  url
}) => {

    const [width, setWidth] = React.useState(window.innerWidth);

  //change view on breakpoint
  useEffect(() => {
        window.addEventListener("resize", () => setWidth(window.innerWidth));
    }, []);

  var backgroundColor: string;
  switch (style) {
    case 0:
      backgroundColor = "#172C49";
      break;
    case 1:
      backgroundColor = "#775A43";
      break;
    case 2:
      backgroundColor = "#737E81";
      break;
    case 3:
      backgroundColor = "#A48B4D";
      break;
    case 4:
      backgroundColor = "#AEB0D9";
      break;
    default:
      backgroundColor = "#775A43";
  }

  let arr: any = [];
  let hasAcitve: boolean = false;
  for (let i = 0; i < breakpoints.length; i++) {
    if (active >= breakpoints[i] && active < breakpoints[i + 1]) {
      arr.push(<p className="bold-text body-small ">{breakpoints[i]}</p>);
      hasAcitve = true;
    } else {
      if (breakpoints[i + 1] !== undefined || hasAcitve === true) {
        arr.push(<p className="body-small grey-text">{breakpoints[i]}</p>);
      } else {
        if (breakpoints[i] <= active) {
          arr.push(<p className="bold-text body-small ">{breakpoints[i]}</p>);
        } else {
          arr.push(<p className="body-small grey-text">{breakpoints[i]}</p>);
        }
      }
    }
    if (i !== breakpoints.length - 1) {
      arr.push(<div className="builder-trait-dot"></div>);
    }
  }

  return (
    <div className="builder-trait-container">
      <div className="trait-icon-container">
        <div className="hex" style={{ backgroundColor: `${backgroundColor}` }}>
          <img
            src={url}
            alt={name}
            title="Trait"
            loading="lazy"
          ></img>
        </div>
        <div
          className="hex-rectangle"
          style={{ backgroundColor: `${backgroundColor}` }}
        >
          <h5>{active}</h5>
        </div>
      </div>
      <div className="builder-trait-details">
        <h4>{name}</h4>
        {width > 1350 && <div className="builder-trait-details-inner">{arr}</div>}
      </div>
    </div>
  );
};
