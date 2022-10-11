import React, {useState, useEffect} from 'react'
import {UnitRow} from '../components/units/UnitRow'
import './pages.css'
import {Dropdown} from '../components/buttons/Dropdown'
import { PrimaryButton } from '../components/buttons/PrimaryButton'
import { getUnitsRanking } from '../model/Model'
import unitsData from '../components/builder/units-data.json'
import { DefaultSearch } from "../components/search/DefaultSearch";
import {PageHead} from './PageHead'
import {TableLoader} from '../components/table/TableLoader'

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
        console.log("sort")
        let tempUnits = units
        if(value === "Average Placement"){
                    console.log("avg")
             for(var i = 0; i < tempUnits.length; i++){
                console.log(tempUnits[i])
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
        else if(value === "Winrate"){
            console.log("wr")
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
        else if(value === "Playrate"){
            console.log("pr")
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
            let tempUnits: any[] = []
            console.log(res)
            res.data.forEach((unit: any) => {
                let unitTraits:any[] = []
                let unitName = unit.id
                unitsData.forEach(unitData => {
                    if(unitData.id === unit.id){
                        unitData.traits.forEach(trait => {
                            unitTraits.push(trait.name)
                        })
                        unitName = unitData.name
                    }
                })
                tempUnits.push({"name": unitName, "id": unit.id, "avgPlacement": unit.avg_place, "winrate": unit.winrate, "playrate": unit.frequency, "traits": unitTraits})
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
            <PageHead 
                title="TFT Units Tier List"
                text="Data-driven Teamfight Tactics units tier list"
                canonical="/units"
                />
            <div className="sort-navigation-container">
                    <Dropdown 
                        name="Sort"
                        values={["Average Placement", "Winrate", "Playrate"]}
                        defaultValue="Average Placement"
                        onChange={handleSort}
                        />
               {width > 500 && <DefaultSearch initialValue="Search unit or trait" inputChange={handleSearch}/>}
            </div>
            <div className="augments-container">
                <div className="units-titles">
                    <h4>Unit</h4>
                    {isMobile && <h4>Traits</h4>}
                    <h4>Avg. Placement</h4>
                    <h4>Winrate</h4>
                    <h4>Playrate</h4>
                </div>
                {units.length > 0 ? units.map((unit, index) => {
                    if(index < toRender){
                        return (
                            <UnitRow name={unit.name} id={unit.id} avgPlacement={unit.avgPlacement} winrate={unit.winrate} playrate={unit.playrate} traits={unit.traits}/>
                        )
                    }
                }) : <TableLoader />}
            </div>
            <PrimaryButton 
                text="Load more"
                fn={handleRenderMore}
                />
        </div>
    )
}

