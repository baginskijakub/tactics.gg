import React,{useState, useEffect} from 'react'
import Dropdown from '../components/buttons/Dropdown'
import {getComps} from "../model/Model"
import { DefaultSearch } from "../components/search/DefaultSearch";
import {Comp as CompClass} from "../classes"
import Comp from "../components/comp/Comp"
import CompLoader from "../components/comp/CompLoader"
import './pages.css'


export const Comps = () => {
    const[sort, setSort] = useState("Average Placement")
    const[toRender, setToRender] = useState(0);
    const[allComps, setAllComps] = useState<CompClass[]>([])
    const[comps, setComps] = useState<CompClass[]>([])
    const [searched, setSearched] = useState("");
    

    function handleSort(value:string){
        setSort(value)
        console.log("sort")
        let tempComps: CompClass[] = comps
        if(value === "Average Placement"){
                console.log("avg")
             for(var i = 0; i < tempComps.length; i++){
                console.log(tempComps[i])
                // Last i elements are already in place 
                for(var j = 0; j < ( tempComps.length - i -1 ); j++){
                    
                    // Checking if the item at present iteration
                    // is greater than the next iteration
                    if(tempComps[j].avgPlacement > tempComps[j+1].avgPlacement){
                        
                    // If the condition is true then swap them
                    var temp = tempComps[j]
                    tempComps[j] = tempComps[j + 1]
                    tempComps[j+1] = temp
                    }
            }
        }}
        else if(value === "Winrate"){
            console.log("wr")
            for(var i = 0; i < tempComps.length; i++){
                    
                // Last i elements are already in place 
                for(var j = 0; j < ( tempComps.length - i -1 ); j++){
                    
                    // Checking if the item at present iteration
                    // is greater than the next iteration
                    if(parseFloat(tempComps[j].winrate.toString()) > parseFloat(tempComps[j+1].winrate.toString())){
                        console.log(typeof tempComps[j].winrate)
                    // If the condition is true then swap them
                    var temp = tempComps[j]
                    tempComps[j] = tempComps[j + 1]
                    tempComps[j+1] = temp
                    }
            }
            }
        }
        else if(value === "Playrate"){
            console.log("pr")
            for(var i = 0; i < tempComps.length; i++){
                
                // Last i elements are already in place 
                for(var j = 0; j < (tempComps.length - i -1 ); j++){
                    
                    // Checking if the item at present iteration
                    // is greater than the next iteration
                    if(tempComps[j].playrate > tempComps[j+1].playrate){
                        
                    // If the condition is true then swap them
                    var temp = tempComps[j]
                    tempComps[j] = tempComps[j + 1]
                    tempComps[j+1] = temp
                    }
            }
            }

        }
        setComps(tempComps)
    }

    function handleSearch(value:string){

        let BreakException = {};

        setSearched(value);
        let arr: CompClass[] = [];
        allComps.forEach((comp) => {
            try{
                comp.units.forEach(unit => {
                    if(unit.name.toLowerCase().includes(value.toLowerCase())){
                        arr.push(comp);
                        throw BreakException;
                    }
                })
                comp.traits.forEach(trait => {
                    if(trait.name.toLowerCase().includes(value.toLowerCase())){
                        arr.push(comp);
                        throw BreakException;
                    }
                })
            }
            catch (e){
                if (e !== BreakException) throw e;
            }
        })
    setComps(arr)     
    }

    useEffect(() => {
        getComps().then(res => {
            console.log(res)
            let tempComps: CompClass[] = []
            res.data.forEach((comp: any) => {
                tempComps.push(comp)
            })
            setAllComps(tempComps)
            setComps(tempComps)
        })

    }, [])

    return (
        <div className="comps-wrapper">
            <div className="sort-navigation-container">
                <Dropdown 
                    name="Sort"
                    values={["Average Placement", "Winrate", "Playrate"]}
                    defaultValue="Average Placement"
                    onChange={handleSort}
                    />
                <DefaultSearch initialValue="Search item" inputChange={handleSearch}/>
            </div>
            {comps.length > 0 ? comps.map((comp) => {
                return(
                    <Comp 
                        units={comp.units}
                        traits={comp.traits}
                        avgPlacement={comp.avgPlacement} 
                        winrate={comp.winrate}
                        top4Ratio={comp.top4Ratio}
                        playrate={comp.playrate}
                        positioning={comp.positioning}
                        augments={comp.augments}
                        items={comp.items}
                        variations={comp.variations}
                    />
                )
            }) : <CompLoader/>}
        </div>
    )
}

export default Comps
