import React from 'react';
import './search.css';
import searchIcon from '../../images/icons/search.svg'

interface Props{
    initialValue: string;
    fn?: ()  => {};
}



export const DefaultSearch: React.FC<Props> = ({initialValue}) => {
    return (
        <div className="default-search" >
            <form autoComplete="off"><input className="body-small" type="text" list="" placeholder={initialValue}/></form>
            <img src={searchIcon} alt="search"></img>
        </div>
    )
}

