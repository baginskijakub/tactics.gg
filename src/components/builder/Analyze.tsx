import React, {useEffect} from "react";
import infoIcon from "../../images/icons/info.svg";
import "./builder.css";
import { SecondaryButton } from "../buttons/SecondaryButton";

interface Props{
  buttonClick: () => void
}

export const Analyze: React.FC<Props> = ({buttonClick}) => {
  const [width, setWidth] = React.useState(window.innerWidth);

  //change view on breakpoint
  useEffect(() => {
        window.addEventListener("resize", () => setWidth(window.innerWidth));
    }, []);

  return (
    <div className="builder-analyze-wrapper">
      <h4>Analyze Performance</h4>
      <p className="body-small">
        Our tool allows you to analyze your comp in terms of:
      </p>
      <ul className="builder-analyze-list">
        <li className="body-small">Average Placement</li>
        <li className="body-small">Winratio</li>
        <li className="body-small">Top4 Ratio</li>
        <li className="body-small">Best Augments</li>
        <li className="body-small">Best Items</li>
      </ul>
      { width > 1350 ? <SecondaryButton text="Analyze Performance" fn={buttonClick}/> : <SecondaryButton text="Analyze" fn={buttonClick}/>}
      <p className="caption-small grey-text">
        That’s a lot of data to traverse, this process might take a while.
      </p>
    </div>
  );
};
