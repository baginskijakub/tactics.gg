import React from "react";
import searchIcon from "../../images/icons/search.svg";
import "./search.css";
import { useKey } from "../../hooks/key";

interface Props {
  head: string;
  initialValue: string;
  handleInput: (name: string) => void;
}

export const SpecificSearch: React.FC<Props> = ({
  head,
  initialValue,
  handleInput,
}) => {
  function handleClick(e: any) {
    e.preventDefault();
    handleInput(
      (document.getElementById("summoner-input") as HTMLInputElement).value
    );
  }

  useKey("Enter", handleClick);

  return (
    <div className="specific-search-container">
      <div className="specific-search-inner">
        <h5>{head}</h5>
        <form autoComplete="off">
          <input
            id="summoner-input"
            className="body-small"
            type="text"
            placeholder={initialValue}
          ></input>
        </form>
      </div>
      <img
        id="summoner-input-button"
        src={searchIcon}
        alt="search"
        onClick={handleClick}
      ></img>
    </div>
  );
};
