import React from "react";
import "./pages.css";
import { GuideList } from "../components/guides/GuideList";
import { DefaultSearch } from "../components/search/DefaultSearch";
import VerticalAd from "../components/ads/VerticalAd";
import HorizontalAdd from "../components/ads/HorizontalAdd";
import { Guide } from "../classes";
import { getAllGuides } from "../model/Model";
import GuideListPlaceholder from "../components/guides/GuideListPlaceholder";
import { PageHead } from "./PageHead";
import ggIcon from '../images/icons/gg_logo.png'
import { Helmet } from "react-helmet";

export const Guides: React.FC = () => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const [guides, setGuides] = React.useState<Guide[]>([]);
  const [filteredGuides, setFilteredGuides] = React.useState<Guide[]>([]);

  //change navbar on breakpoint
  React.useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
    getAllGuides().then((res: any) => {
      setGuides(res.data);
      setFilteredGuides(res.data);
    });
  }, []);

  const onInputChange = (value: string) => {
    setFilteredGuides(
      guides.filter((guide: Guide) => {
        return guide.title.toLowerCase().includes(value.toLowerCase());
      })
    );
  };

  return (
    <div className="guides-page-wrapper">
      <Helmet>
          <title>TFT Guides</title>
          <link rel="icon" href={ggIcon}></link>
          <link rel="canonical" href="https://tactix.gg/guides"></link>
          <meta name="description" content="Find out how to play your favourite composition with our guides." data-rh="true"></meta>
      </Helmet>
      {width > 1000 ? <VerticalAd /> : <HorizontalAdd />}
      <div className="guides-container">
        <DefaultSearch
          initialValue="Search guide"
          inputChange={onInputChange}
        />
        {filteredGuides.length > 0 ? (
          filteredGuides.map((guide) => {
            return (
              <GuideList
                key={guide.title}
                date={guide.date}
                title={guide.title}
                description={guide.description}
                set={guide.set}
                minutesRead={guide.timeRead}
                src={guide.imageUrl}
                border={guide.borderColorUnitCost}
              />
            );
          })
        ) : (
          <GuideListPlaceholder />
        )}
      </div>
      {width > 1000 ? <VerticalAd /> : <HorizontalAdd />}
    </div>
  );
};
