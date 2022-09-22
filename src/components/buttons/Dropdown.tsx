import React, { useState } from "react";
import "./buttons.css";
import { DropdownButton } from "./DropdownButton";
import arrow from "../../images/icons/arrow_drop_down.svg";

interface Props {
  name: string;
  values: string[];
  defaultValue: string;
  size?: "small" | "big";
  onChange: (value: string) => void;
}

export const Dropdown: React.FC<Props> = ({
  name,
  values,
  defaultValue,
  size,
  onChange,
}) => {
  const [selected, setSelected] = useState(defaultValue);

  function handleChange(value: string) {
    setSelected(value);
    onChange(value);
  }

  //false represents closed, true => open
  const [state, setState] = useState(false);

  function handleOpen() {
    if (state === false) {
      setState(true);
    } else {
      setState(false);
    }
  }
  if (size === "small") {
    return (
      <div className="dropdown-wrapper-small" onClick={handleOpen}>
        <div className="dropdown-name-small">
          <p className="body-small">{name}</p>
        </div>
        <div className="dropdown-value-container-small">
          <div className="dropdown-value-small">
            <p className="body-small">{selected}</p>
            <img src={arrow} alt="arrow"></img>
          </div>
          {state && (
            <div className="dropdown-buttons-container">
              {values.map((element) => {
                if (element === selected) {
                  return (
                    <DropdownButton
                      text={element}
                      size="big"
                      isSelected={true}
                      fn={() => {}}
                    />
                  );
                }
                return (
                  <DropdownButton
                    text={element}
                    size="big"
                    fn={() => handleChange(element)}
                  />
                );
              })}
            </div>
          )}
        </div>
      </div>
    );
  } else {
    return (
      <div className="dropdown-wrapper" onClick={handleOpen}>
        <div className="dropdown-name">
          <p className="body">{name}</p>
        </div>
        <div className="dropdown-value-container">
          <div className="dropdown-value">
            <p className="body">{selected}</p>
            <img src={arrow} alt="arrow"></img>
          </div>
          {state && (
            <div className="dropdown-buttons-container">
              {values.map((element) => {
                if (element === selected) {
                  return (
                    <DropdownButton
                      text={element}
                      size="big"
                      isSelected={true}
                      fn={() => {}}
                    />
                  );
                }
                return (
                  <DropdownButton
                    text={element}
                    size="big"
                    fn={() => handleChange(element)}
                  />
                );
              })}
            </div>
          )}
        </div>
      </div>
    );
  }
};

export default Dropdown;
