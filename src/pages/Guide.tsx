import React from "react";
import { GuideElement } from "../classes";
import HorizontalAdd from "../components/ads/HorizontalAdd";
import VerticalAd from "../components/ads/VerticalAd";
import GuideComponent from "../components/guides/Guide";

export const Guide = () => {
  const [width, setWidth] = React.useState(window.innerWidth);

  //change navbar on breakpoint
  React.useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  const elems: GuideElement[] = [
    {
      type: "paragraph",
      content:
        "The best scenario to play Olaf is when you get him from orbs on first stage so you can get more AD throughout the game. First stage itself can give him up to +24 AD what makes a huge difference if you hit him at 3-2. In the first stafe you have 2 options play olaf with Astral/Mirage Pirate or Jade.",
    },
    {
      type: "heading",
      content: "Early game",
    },
    {
      type: "paragraph",
      content:
        "The best scenario to play Olaf is when you get him from orbs on first stage so you can get more AD throughout the game. First stage itself can give him up to +24 AD what makes a huge difference if you hit him at 3-2. In the first stafe you have 2 options play olaf with Astral/Mirage Pirate or Jade.",
    },
    {
      type: "subheading",
      content: "Early game",
    },
    {
      type: "paragraph",
      content:
        "The best scenario to play Olaf is when you get him from orbs on first stage so you can get more AD throughout the game. First stage itself can give him up to +24 AD what makes a huge difference if you hit him at 3-2. In the first stafe you have 2 options play olaf with Astral/Mirage Pirate or Jade.",
    },
    {
      type: "divider",
    },
    {
      type: "subheading",
      content: "Early game",
    },
    {
      type: "board",
      content:
        "https://www.tactix.gg/embed/03eaa910-5a12-40b4-a043-8429708f4915",
    },
  ];
  return (
    <div className="guide-page-wrapper">
      {width > 1000 ? <VerticalAd /> : <HorizontalAdd />}
      <GuideComponent
        elements={elems}
        title={"Olaf Reroll Guide"}
        description={
          "A beginner’s guide to play Olaf reroll. This comp is fairly hard to play and most importantly has a lot of prequities. As Olaf can gain a lot of Attack Damage from his passive ability it’s quite important to get him relatively early. So that Olaf is not the best composition to force every game."
        }
        set={"Set 7.5"}
        timeRead={5}
        date={"October 14, 2022"}
        imageUrl={
          "https://raw.communitydragon.org/latest/game/assets/characters/tft8_aphelios/hud/tft8_aphelios.tft_set8.png"
        }
        borderColorUnitCost={5}
      />
      {width > 1000 ? <VerticalAd /> : <HorizontalAdd />}
    </div>
  );
};
