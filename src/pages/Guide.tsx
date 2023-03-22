import React, { useState } from "react";
import { Guide as IGuide, GuideElement } from "../classes";
import HorizontalAdd from "../components/ads/HorizontalAdd";
import VerticalAd from "../components/ads/VerticalAd";
import GuideComponent from "../components/guides/Guide";
import GuidePlaceholder from "../components/guides/GuidePlaceholder";
import { getGuide } from "../model/Model";

export const Guide = () => {
  const [guide, setGuide] = useState<IGuide>()
  const window = require('global')
  const [width, setWidth] = React.useState(window.innerWidth);


  //change navbar on breakpoint
  React.useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
    let id: string = window.location.pathname
    let arr: string[] = id.split('/')
    id = arr[2]
    if(id !== undefined){
      getGuide(id).then((res:any) => {
        setGuide({...res.data})
      })
    }
  }, []);



  return (
    <div className="guide-page-wrapper">
      {width > 1000 ? <VerticalAd /> : <HorizontalAdd />}
      {guide !== undefined ? <GuideComponent
        elements={guide.elements}
        title={guide.title}
        description={
         guide.description
        }
        set={guide.set}
        timeRead={guide.timeRead}
        date={guide.date}
        imageUrl={
          guide.imageUrl
        }
        borderColorUnitCost={guide.borderColorUnitCost}
      /> : <GuidePlaceholder />}
      {width > 1000 ? <VerticalAd /> : <HorizontalAdd />}
    </div>
  );
};
