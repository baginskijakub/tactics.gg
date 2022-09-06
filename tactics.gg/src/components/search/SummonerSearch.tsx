import React, {useState} from 'react';
import './search.css';
import { RegionDropdown } from './RegionDropdown';
import SpecificSearch from './SpecificSearch';


// interface Props{
//     handleInput: (name: string) => void
// }

export const SummonerSearch:React.FC = (handleInput) => {
    const [regions, setRegions] = useState([{text:"EUW", size:"big", isSelected:true},{text:"EUNE", size:"big", isSelected:false}, {text:"NA", size:"big", isSelected:false}]);
    const[region, setRegion] = useState("EUW");
    const[isOpen, setIsOpen] = useState(false);

    function handleClick(text: string){
        const temp = regions;
        temp.forEach(function (element)
        {      
            if(element.text === text)
            {   
                element.isSelected = true;
                console.log(element.isSelected)
            }
            else
            {
                element.isSelected = false;
            }}
            )
        setRegions(temp);
        setRegion(text);
    }

    function handleOpen(){
        if(isOpen === false){
            setIsOpen(true);
            const elements  = document.getElementsByClassName("region-dropdown-container") as HTMLCollectionOf<HTMLElement>;
            if(elements.length > 0)
            {
                elements[0].style.display = 'flex'
            }
        }
        else{
            setIsOpen(false);
            const elements  = document.getElementsByClassName("region-dropdown-container") as HTMLCollectionOf<HTMLElement>;
            if(elements.length > 0)
            {
                elements[0].style.display = 'none'
            }
        }
    }

    return (
        <div className="summoner-search-container">  
            <RegionDropdown 
                region={region}
                regions={regions}
                handleClick={handleClick}
                handleOpen={handleOpen}
                />
            <span className="summoner-search-divider"></span>
            <SpecificSearch 
                head="Summoner name"
                initialValue="Search summoner"
                handleInput={() => handleInput}
                />
        </div>
    )
}

export default SummonerSearch
