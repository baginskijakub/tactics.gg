import React from "react";
import "./guides.css";
import { Guide as IGuide, GuideElement as IGuideElement } from "../../classes";
import { GuideElement } from "./GuideElement";
//https://www.tactix.gg/embed/03eaa910-5a12-40b4-a043-8429708f4915

export const Guide: React.FC<IGuide> = (guide) => {
    const [width, setWidth] = React.useState(window.innerWidth);

    //change navbar on breakpoint
    React.useEffect(() => {
      window.addEventListener("resize", () => setWidth(window.innerWidth));
    }, []);

  return (
    <div className="guide-wrapper">
      <div className="guide-head">
        <div className="guide-left">
          <div className="guide-info">
            <p className="guide-set body-small">{guide.set}</p>
            <span className="guide-info-divider" />
            <p className="body-small">{guide.timeRead} min read</p>
            {width > 800 && <span className="guide-info-divider" />}
            {width > 800 && <p className="body-small">{guide.date}</p>}
          </div>
          <h1>{guide.title}</h1>
          <p className="body text-secondary guide-description">{guide.description}</p>
        </div>
        <img className={`guide-head-img border-${guide.borderColorUnitCost}`} src={guide.imageUrl} />
      </div>
      <span className="guide-divider" />
      <div className="guide-elements-container">
        {guide.elements.map((elem: IGuideElement) => {
          return <GuideElement type={elem.type} content={elem.content} />;
        })}
      </div>
    </div>
  );
};

export default Guide;
