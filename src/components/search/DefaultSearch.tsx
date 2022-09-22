import React from "react";
import "./search.css";
import searchIcon from "../../images/icons/search.svg";

interface Props {
  initialValue: string;
  inputChange: (name: string) => void;
}

export const DefaultSearch: React.FC<Props> = ({
  initialValue,
  inputChange,
}) => {
  return (
    <div className="default-search">
      <form autoComplete="off">
        <input
          className="body-small"
          type="text"
          list=""
          placeholder={initialValue}
          onChange={(event) => inputChange(event?.target.value)}
        />
      </form>
      <img src={searchIcon} alt="search"></img>
    </div>
  );
};
