import React, {useState, useEffect} from 'react'
import {UnitRow} from '../components/units/UnitRow'
import './pages.css'
import {Dropdown} from '../components/buttons/Dropdown'
import { PrimaryButton } from '../components/buttons/PrimaryButton'
import { getUnitsRanking } from '../model/Model'
// import unitsData from '../components/builder/units-data'
import { DefaultSearch } from "../components/search/DefaultSearch";
import {PageHead} from './PageHead'
import {TableLoader} from '../components/table/TableLoader'
import {AnalyzedCounter} from './AnalyzedCounter'
import HorizontalAdd from '../components/ads/HorizontalAdd'

export const Units:React.FC = () => {
    const[sort, setSort] = useState("Average Placement")
    const[toRender, setToRender] = useState(20);
    const[units, setUnits] = useState<any[]>([])
    const[allUnits, setAllUnits] = useState<any[]>([])
    const [searched, setSearched] = useState("");
    const [width, setWidth] = React.useState(window.innerWidth);

    //change navbar on breakpoint
    React.useEffect(() => {
        window.addEventListener("resize", () => setWidth(window.innerWidth));
    }, []);

    function handleSort(value: string){
        setSort(value)
        let tempUnits = units
        if(value === "Average Placement"){
             for(var i = 0; i < tempUnits.length; i++){
                // Last i elements are already in place 
                for(var j = 0; j < ( tempUnits.length - i -1 ); j++){
                    
                    // Checking if the item at present iteration
                    // is greater than the next iteration
                    if(tempUnits[j].avgPlacement > tempUnits[j+1].avgPlacement){
                        
                    // If the condition is true then swap them
                    var temp = tempUnits[j]
                    tempUnits[j] = tempUnits[j + 1]
                    tempUnits[j+1] = temp
                    }
            }
        }
        }
        else if(value === "Win Rate"){
            for(var i = 0; i < tempUnits.length; i++){
                    
                // Last i elements are already in place 
                for(var j = 0; j < ( tempUnits.length - i -1 ); j++){
                    
                    // Checking if the item at present iteration
                    // is greater than the next iteration
                    if(parseFloat(tempUnits[j].winrate) < parseFloat(tempUnits[j+1].winrate)){
                        
                    // If the condition is true then swap them
                    var temp = tempUnits[j]
                    tempUnits[j] = tempUnits[j + 1]
                    tempUnits[j+1] = temp
                    }
            }
            }
        }
        else if(value === "Play Rate"){
            for(var i = 0; i < tempUnits.length; i++){
                
                // Last i elements are already in place 
                for(var j = 0; j < ( tempUnits.length - i -1 ); j++){
                    
                    // Checking if the item at present iteration
                    // is greater than the next iteration
                    if(parseFloat(tempUnits[j].playrate) > parseFloat(tempUnits[j+1].playrate)){
                        
                    // If the condition is true then swap them
                    var temp = tempUnits[j]
                    tempUnits[j] = tempUnits[j + 1]
                    tempUnits[j+1] = temp
                    }
            }
            }

        }
        setUnits(tempUnits)
    }
    

    useEffect(() => {
        getUnitsRanking().then((res) => {
            console.log(res)
            let tempUnits: any[] = []
            res.data.forEach((unit: any) => {
                let traits: {src: string, name: string}[] = []
                for(let i = 0; i < unit.traitNames.length; i++){
                    traits.push({src: unit.traitIcons[i], name: unit.traitNames[i]})
                }
                console.log(traits)
                tempUnits.push({"name": unit.name, "src": unit.icon, "id": unit.id, "avgPlacement": unit.avg_place, "winrate": unit.winrate, "playrate": unit.frequency, "traits": traits})
            })
            setUnits(tempUnits)
            setAllUnits(tempUnits)
            setToRender(20)
        })

    }, [])

    function handleRenderMore(){
        let temp  = toRender;
        setToRender(temp + 20);
    }

    function handleSearch(value: string) {
        setSearched(value);
        let arr: any = [];
        allUnits.forEach((unit) => {
        if (unit.name.toLowerCase().includes(value.toLowerCase())) {
            arr.push(unit);
        }
        else{
            let condition = false
            unit.traits.forEach((trait: any) => {
                if(trait.toLowerCase().includes(value.toLowerCase())){
                    condition = true
                }
            })
            if(condition){
                arr.push(unit);
            }
        }
        });
        setUnits(arr);
    }

    let isMobile  = window.innerWidth > 1050
    return (
        <div className="augments-wrapper">
            <HorizontalAdd/>
            <PageHead 
                title="TFT Units Tier List"
                text="Data-driven Teamfight Tactics units tier list"
                canonical="/units"
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
            <div className="augments-container">
                <div className="units-titles">
                    <h4>Unit</h4>
                    {isMobile && <h4>Traits</h4>}
                    <h4>Avg. Placement</h4>
                    <h4>Win Rate</h4>
                    <h4>Play Rate</h4>
                </div>
                {units.length > 0 ? units.map((unit, index) => {
                    if(index < toRender){
                        return (
                            <UnitRow name={unit.name} src={unit.src} id={unit.id} avgPlacement={unit.avgPlacement} winrate={unit.winrate} playrate={unit.playrate} traits={unit.traits}/>
                        )
                    }
                }) : <TableLoader />}
            </div>
            <PrimaryButton 
                text="Load more"
                fn={handleRenderMore}
                />
                <HorizontalAdd/>
        </div>
    )
}

