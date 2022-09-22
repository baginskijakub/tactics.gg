import React from "react";

interface Props {
  units: UnitItems[];
}

interface UnitItems {
  unitName: string;
  unitSrc: string;
  cost: number;
  itemsBIS: ItemUnit[];
  itemsRate: ItemUnit[];
}

interface ItemUnit {
  src: string;
  name: string;
  rate: number | null;
}

export const CompItems: React.FC<Props> = ({ units }) => {
  let counter: number = 0;
  return (
    <div className="comp-items-container">
      <div className="comp-items-titles">
        <div className="comp-items-title title-unit">
          <h4>Unit</h4>
        </div>
        <div className="comp-items-title title-bis">
          <h4>Best in slot</h4>
        </div>
        <div className="comp-items-title title-rate">
          <h4>Play rate</h4>
        </div>
      </div>
      <span className="comp-horizontal-separator"></span>
      {units.map((element) => {
        let border: string = "grey-border";
        switch (element.cost) {
          case 1:
            border = "grey-border";
            break;
          case 2:
            border = "green-border";
            break;
          case 3:
          case 6:
            border = "blue-border";
            break;
          case 4:
          case 8:
            border = "purple-border";
            break;
          case 5:
          case 10:
            border = "yellow-border";
            break;
        }
        counter++;
        return (
          <div className="comp-items-unit-wrapper">
            <div className="comp-items-unit">
              <div className="comp-items-splash">
                <img
                  src={element.unitSrc}
                  className={border}
                  alt={element.unitName}
                ></img>
              </div>
              <span className="comp-vertical-separator"></span>
              <div className="comp-items-bis">
                {element.itemsBIS.map((item) => {
                  return <img src={item.src} alt={item.name}></img>;
                })}
              </div>
              <span className="comp-vertical-separator"></span>
              <div className="comp-items-rate">
                {element.itemsRate.map((item) => {
                  return (
                    <div className="comp-items-item-rate">
                      <p className="body-small">{item.rate}%</p>
                      <img src={item.src} alt={item.name}></img>
                    </div>
                  );
                })}
              </div>
            </div>
            {counter < 4 && <span className="comp-horizontal-separator"></span>}
          </div>
        );
      })}
    </div>
  );
};

export default CompItems;
