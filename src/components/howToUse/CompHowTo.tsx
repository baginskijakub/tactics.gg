import React from "react";
import "./howToUse.css";

export const CompHowTo: React.FC = () => {
  return (
    <div className="comp-how-to-wrapper">
      <div className="comp-how-to-container">
        <div className="comp-how-to-inner">
          <h1>Positioning</h1>
          <h4>Where to place champions?</h4>
          <p className="body-small">
            As you probably know positioning is extremely important in TFT. If
            you are having trouble placing your champions on the board check out
            positioning section in a composition. Because there is no universal
            positioning against every oponent, remember to adjust your
            positioning to the oponent you are facing the next round. Try to
            think how you can maximize chances of winning the next round by
            reading units’ abilities descriptions. For example try to isolate
            you carry to dodge Shyvana’s ultimate!
          </p>
        </div>
        <img
          src="https://ittledul.sirv.com/Images/splashes/comps/positioning.png"
          alt="tft positioning"
          loading="lazy"
          width={630}
          height={463}
        />
      </div>
      <div className="comp-how-to-container">
        <img
          src="https://ittledul.sirv.com/Images/splashes/comps/items.png"
          alt="tft positioning"
          loading="lazy"
          width={630}
          height={463}
        />
        <div className="comp-how-to-inner">
          <h1>Items</h1>
          <h4>What items should I slam?</h4>
          <p className="body-small">
            Many TFT players often have a really bad habit of waiting too long
            with putting items on units. Eventhough all units have their best in
            slot items set, most of times it is more worth it to slam a worse
            item faster rather than get the perfect items very late. In
            composition’s items section you can see the suggested best in slot
            items as well as 6 most played items by top challanger players.
            Don’t hesitate to slam those!
          </p>
        </div>
      </div>
      <div className="comp-how-to-container">
        <div className="comp-how-to-inner">
          <h1>Augments</h1>
          <h4>What augments are the best?</h4>
          <p className="body-small">
            Hextech Augments are very important part of TFT gameplay. With our
            compositions you can easily find out what augment works the best for
            your composition. Check which one of your offered augments has the
            best average placement, winrate and playrate.
          </p>
        </div>
        <img
          src="https://ittledul.sirv.com/Images/splashes/comps/augments.png"
          alt="tft positioning"
          loading="lazy"
          width={630}
          height={463}
        />
      </div>
      <div className="comp-how-to-container">
        <img
          src="https://ittledul.sirv.com/Images/splashes/comps/variations.png"
          alt="tft positioning"
          loading="lazy"
          width={630}
          height={463}
        />
        <div className="comp-how-to-inner">
          <h1>Variations</h1>
          <h4>What if I don’t get all the desired units?</h4>
          <p className="body-small">
            Sometimes rolling down can be not as successful as we desire.
            Variations section in our compsition is destined to increase your
            chances of completing a composition even if you don’t hit all
            desired units.
          </p>
        </div>
      </div>
    </div>
  );
};
