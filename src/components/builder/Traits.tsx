import React from "react";
import infoIcon from "../../images/icons/info.svg";
import "./builder.css";
import Trait from "./Trait";
import { BuilderTrait } from "../../classes";

interface Props{
  traits: BuilderTrait[]
}

export const Traits: React.FC<Props> = ({traits}) => {

  let tempTraits = []
   for(var i = 0; i < traits.length; i++){ 
   // Last i elements are already in place 
    for(var j = 0; j < ( traits.length - i -1 ); j++){
      
     // Checking if the item at present iteration
     // is greater than the next iteration
        if(traits[j].style < traits[j+1].style){
        
       // If the condition is true then swap them
          var temp = traits[j]
          traits[j] = traits[j + 1]
          traits[j+1] = temp
        }
        else if(traits[j].style === traits[j+1].style){
          if(traits[j].active < traits[j+1].active){
        
       // If the condition is true then swap them
            var temp = traits[j]
            traits[j] = traits[j + 1]
            traits[j+1] = temp
          }
        }
      }
   }
   if(traits.length > 0){
      return (
        <div className="builder-traits-wrapper">
          {traits.map((trait) => {
            return(
              <Trait style={trait.style} name={trait.name} active={trait.active} breakpoints={trait.breakpoints} />
            )
          })}
        </div>
      );
   }
   else{
     return (
        <div className="builder-traits-wrapper-empty">
          <img src={infoIcon} alt="info"></img>
          <h5>No traits active</h5>
        </div>
      );
   }

};

export default Traits;
