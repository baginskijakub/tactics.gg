import React from "react";
import "./guides.css";
import { GuideElement as IGuideElement } from "../../classes";

export const GuideElement: React.FC<IGuideElement> = (element) => {
  switch (element.type) {
    case "paragraph":
      return <p className="guide-paragraph body text-secondary">{element.content}</p>;
    case "heading":
      return <h2 className="guide-heading">{element.content}</h2>;
    case "subheading":
      return <h3 className="guide-subheading">{element.content}</h3>;
    case "board":
      return (
        <iframe
          className="guide-frame"
          src={element.content}
          title="Powered by TACTIX.GG"
          frameBorder="0"
        ></iframe>
      );
    case "divider":
      return <span className="guide-divider-inner" />;
  }
};
