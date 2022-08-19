import React from 'react';
import searchIcon from '../../images/icons/search.svg';
import './search.css';

interface Props{
    head: string;
    initialValue: string;
    fn?: ()  => {};
}

export const SpecificSearch: React.FC<Props> = ({head, initialValue, fn}) => {
    return (
        <div className="specific-search-container">
            <div className="specific-search-inner">
                <h5>{head}</h5>
                <input className="body-small" type="text" placeholder={initialValue}></input>
            </div>
            <img src={searchIcon} alt="search"></img>
        </div>
    )
}

export default SpecificSearch
