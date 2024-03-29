import React,{useState, useEffect} from 'react'
import {Dropdown} from '../components/buttons/Dropdown'
import {getComps} from "../model/Model"
import { DefaultSearch } from "../components/search/DefaultSearch";
import {Comp as CompClass} from "../classes"
import {Comp} from "../components/comp/Comp"
import {CompLoader} from "../components/comp/CompLoader"
import {PageHead} from './PageHead'
import {CompHowTo} from '../components/howToUse/CompHowTo'
import {AnalyzedCounter} from './AnalyzedCounter'
import {HorizontalAdd} from '../components/ads/HorizontalAdd'
import './pages.css'


export const Comps = () => {
    const window = require('global')
    const[sort, setSort] = useState("Average Placement")
    const[toRender, setToRender] = useState(0);
    const[allComps, setAllComps] = useState<CompClass[]>([])
    const[comps, setComps] = useState<CompClass[]>([])
    const [searched, setSearched] = useState("");
    const [width, setWidth] = React.useState(window.innerWidth);

    //change navbar on breakpoint
    React.useEffect(() => {
        window.addEventListener("resize", () => setWidth(window.innerWidth));
    }, []);

    

    function handleSort(value:string){
        setSort(value)
        let tempComps: CompClass[] = comps
        if(value === "Average Placement"){
             for(var i = 0; i < tempComps.length; i++){
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
        else if(value === "Win Rate"){
            for(var i = 0; i < tempComps.length; i++){
                    
                // Last i elements are already in place 
                for(var j = 0; j < ( tempComps.length - i -1 ); j++){
                    
                    // Checking if the item at present iteration
                    // is greater than the next iteration
                    if(parseFloat(tempComps[j].winrate.toString()) < parseFloat(tempComps[j+1].winrate.toString())){
                    // If the condition is true then swap them
                    var temp = tempComps[j]
                    tempComps[j] = tempComps[j + 1]
                    tempComps[j+1] = temp
                    }
            }
            }
        }
        else if(value === "Play Rate"){
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
            <HorizontalAdd/>
            <PageHead 
                title="TFT Meta Team Comps"
                text="Teamfight Tactics data-driven composition tier list based on current meta"
                canonical=""
                />
            <div className="sort-navigation-container">
                <div className="sort-dropdown-container">
                    <Dropdown 
                        name="Sort"
                        values={["Average Placement", "Win Rate", "Play Rate"]}
                        defaultValue="Average Placement"
                        onChange={handleSort}
                        /> 
                    {width > 500 && <DefaultSearch initialValue="Search unit or trait" inputChange={handleSearch}/>}
                </div>
                {width > 1050 && <AnalyzedCounter/>}
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
            <HorizontalAdd/>
            <CompHowTo/>
        </div>
    )
}
