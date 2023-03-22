import React from "react";
import "./guides.css";
import linkIcon from "../../images/icons/link.svg";

interface Props {
  date: string;
  title: string;
  description: string;
  set: string;
  minutesRead: number;
  src: string;
  border: number
}

export const GuideList: React.FC<Props> = ({date, title, description , set, minutesRead, src, border}) => {
  return (
    <div className="guide-list-wrapper-small">
      <div className="guide-list-head-small">
        <div className="guide-list-head-inner">
          <h4>{title}</h4>
          <p className="body-small grey">
            {description}
          </p>
        </div>
        <div className="guide-list-foot">
          <p className="caption-small guide-set-tooltip">{set}</p>
          <span className="dot-separator" />
          <p className="caption-small grey">{minutesRead} min read</p>
          <span className="dot-separator" />
          <p className="caption-small grey">{date}</p>
        </div>
      </div>
      <img
        className={`guide-list-splash border-${border}`}
        src={src}
        alt={title}
      ></img>
    </div>
  );
};
