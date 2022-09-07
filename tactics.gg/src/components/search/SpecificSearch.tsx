import React, {useEffect} from 'react';
import searchIcon from '../../images/icons/search.svg';
import './search.css';

interface Props{
    head: string;
    initialValue: string;
    handleInput: (name: string)  => void;
}

export const SpecificSearch:React.FC<Props> = ({head, initialValue, handleInput}) => {
        
    function handleClick(){
        handleInput((document.getElementById("summoner-input") as HTMLInputElement).value);
    }

    let input = document.getElementById("summoner-input") as HTMLInputElement;


    return (
        <div className="specific-search-container">
            <div className="specific-search-inner">
                <h5>{head}</h5>
                <input id="summoner-input" className="body-small" type="text" placeholder={initialValue}></input>
            </div>
            <img id="summoner-input-button" src={searchIcon} alt="search" onClick={handleClick}></img>
        </div>
    )
}

export default SpecificSearch
