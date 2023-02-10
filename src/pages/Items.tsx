import React, {useState, useEffect} from 'react'
import {ItemRow} from '../components/items/ItemRow'
import{ Dropdown} from '../components/buttons/Dropdown'
import { PrimaryButton } from '../components/buttons/PrimaryButton'
import { getItemsRanking } from '../model/Model'
import { DefaultSearch } from "../components/search/DefaultSearch";
import './pages.css'
import {PageHead} from './PageHead'
import {AnalyzedCounter} from './AnalyzedCounter'
import {TableLoader} from '../components/table/TableLoader'
import HorizontalAdd from '../components/ads/HorizontalAdd'

export const Items:React.FC = () => {
    const[sort, setSort] = useState("Average Placement")
    const[toRender, setToRender] = useState(0);
    const[allItems, setAllItems] = useState<any[]>([])
    const[items, setItems] = useState<any[]>([])
    const[type, setType] = useState("Regular")
    const [searched, setSearched] = useState("");
    const [width, setWidth] = React.useState(window.innerWidth);

    //change navbar on breakpoint
    React.useEffect(() => {
        window.addEventListener("resize", () => setWidth(window.innerWidth));
    }, []);



    
    useEffect(() => {
        getItemsRanking().then((res) => {
            let tempItems: any[] = []
            res.data.forEach((item: any) => {
                tempItems.push({"id": item.id, "src": item.icon, "name": item.name, "avgPlacement": item.avg_place, "winrate": item.winrate, "playrate": item.frequency, "type": item.type})
            })
            setItems(tempItems)
            setAllItems(tempItems)
            setToRender(20)
        })

    }, [])

    function handleSort(value: string){
        setSort(value)
        let tempItems = items
        if(value === "Average Placement"){
             for(var i = 0; i < tempItems.length; i++){
                // Last i elements are already in place 
                for(var j = 0; j < ( tempItems.length - i -1 ); j++){
                    
                    // Checking if the item at present iteration
                    // is greater than the next iteration
                    if(tempItems[j].avgPlacement > tempItems[j+1].avgPlacement){
                        
                    // If the condition is true then swap them
                    var temp = tempItems[j]
                    tempItems[j] = tempItems[j + 1]
                    tempItems[j+1] = temp
                    }
            }
        }
        }
        else if(value === "Win Rate"){
            for(var i = 0; i < tempItems.length; i++){
                    
                // Last i elements are already in place 
                for(var j = 0; j < ( tempItems.length - i -1 ); j++){
                    
                    // Checking if the item at present iteration
                    // is greater than the next iteration
                    if(parseFloat(tempItems[j].winrate.toString()) > parseFloat(tempItems[j+1].winrate.toString())){
                    // If the condition is true then swap them
                    var temp = tempItems[j]
                    tempItems[j] = tempItems[j + 1]
                    tempItems[j+1] = temp
                    }
            }
            }
        }
        else if(value === "Play Rate"){
            for(var i = 0; i < tempItems.length; i++){
                
                // Last i elements are already in place 
                for(var j = 0; j < (tempItems.length - i -1 ); j++){
                    
                    // Checking if the item at present iteration
                    // is greater than the next iteration
                    if(tempItems[j].frequency > tempItems[j+1].frequency){
                        
                    // If the condition is true then swap them
                    var temp = tempItems[j]
                    tempItems[j] = tempItems[j + 1]
                    tempItems[j+1] = temp
                    }
            }
            }

        }
        setItems(tempItems)
    }

    function handleRenderMore(){
        let temp  = toRender;
        setToRender(temp + 20);
    }

    function handleType(value: string){
        let tempValue: string = "standard"
        if(value === "Emblem"){
            tempValue = "traits"
        }
        else if(value === "Radiant"){
            tempValue = "radiant"
        }
        else if(value === "Ornn"){
            tempValue = "ornn_items"
        }
        let tempItems: any[] = []
        allItems.forEach(item => {
            if(item.type === tempValue){
                tempItems.push(item)
            }
        })
        setItems(tempItems)
    }

    function handleSearch(value: string) {


        setSearched(value);
        let arr: any = [];
        allItems.forEach((item) => {
        if (item.name.toLowerCase().includes(value.toLowerCase())) {
            arr.push(item);
        }
        });
        setItems(arr);
    }

    
    return (
        <div className="augments-wrapper">
            <HorizontalAdd/>
            <PageHead 
                title="TFT Items Tier List"
                text="Data-driven Teamfight Tactics items tier list"
                canonical="/items"
                />
            <div className="sort-navigation-container">
                <div className="sort-dropdown-container">
                    <Dropdown 
                        name="Sort"
                        values={["Average Placement", "Win Rate", "Play Rate"]}
                        defaultValue="Average Placement"
                        onChange={handleSort}
                        />
                    <Dropdown 
                        name="Type"
                        values={["Regular", "Emblem", "Radiant", "Ornn"]}
                        defaultValue="Normal"
                        onChange={handleType}
                        />
                    {width > 500 && <DefaultSearch initialValue="Search item" inputChange={handleSearch}/>}
                </div>
                {width > 1350 && <AnalyzedCounter/>}

            </div>
            <div className="augments-container">
                <div className="augments-titles">
                    <h4>Augments</h4>
                    <h4>Average Placement</h4>
                    <h4>Win Rate</h4>
                    <h4>Play Rate</h4>
                </div>
                {items.length > 0 ? items.map((item, index) => {
                    if(index <= toRender){
                        return (
                        <ItemRow id={item.id} src={item.src} name={item.name} avgPlacement={item.avgPlacement} winrate={item.winrate} playrate={item.playrate}/>
                        )
                    }
                }) : <TableLoader/>}
            </div>
            <PrimaryButton 
                text="Load more"
                fn={handleRenderMore}
                />
                <HorizontalAdd/>
        </div>
    )
}