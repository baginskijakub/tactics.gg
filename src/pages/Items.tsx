import React, {useState, useEffect} from 'react'
import ItemRow from '../components/items/ItemRow'
import Dropdown from '../components/buttons/Dropdown'
import { PrimaryButton } from '../components/buttons/PrimaryButton'
import { getItemsRanking } from '../model/Model'
import { DefaultSearch } from "../components/search/DefaultSearch";
import './pages.css'
import itemsData from '../components/builder/Items.json'
import PageHead from './PageHead'
import TableLoader from '../components/table/TableLoader'

export const Augments:React.FC = () => {
    const[sort, setSort] = useState("Average Placement")
    const[toRender, setToRender] = useState(0);
    const[allItems, setAllItems] = useState<any[]>([])
    const[items, setItems] = useState<any[]>([])
    const[type, setType] = useState("Normal")
    const [searched, setSearched] = useState("");
    const [width, setWidth] = React.useState(window.innerWidth);

    //change navbar on breakpoint
    React.useEffect(() => {
        window.addEventListener("resize", () => setWidth(window.innerWidth));
    }, []);



    
    useEffect(() => {
        getItemsRanking().then((res) => {
            let tempNormalItems: any[] = []
            let tempItems: any[] = []
            console.log(res)
            res.data.forEach((item: any) => {
                let tempName = ""
                let tempType = ""
                itemsData.items.forEach(itemData => {
                    if(itemData.id === item.id){
                        tempName = itemData.name
                        tempType = itemData.type
                    }
                });
                tempItems.push({"id": item.id, "name": tempName, "avgPlacement": item.avg_place, "winrate": item.winrate, "playrate": item.frequency, "type": tempType})
                if(tempType === "normal"){
                    tempNormalItems.push({"id": item.id, "name": tempName, "avgPlacement": item.avg_place, "winrate": item.winrate, "playrate": item.frequency, "type": tempType})
                }
            })
            setItems(tempNormalItems)
            setAllItems(tempItems)
            setToRender(20)
        })

    }, [])

    function handleSort(value: string){
        setSort(value)
        console.log("sort")
        let tempItems = items
        if(value === "Average Placement"){
                    console.log("avg")
             for(var i = 0; i < tempItems.length; i++){
                console.log(tempItems[i])
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
        else if(value === "Winrate"){
            console.log("wr")
            for(var i = 0; i < tempItems.length; i++){
                    
                // Last i elements are already in place 
                for(var j = 0; j < ( tempItems.length - i -1 ); j++){
                    
                    // Checking if the item at present iteration
                    // is greater than the next iteration
                    if(parseFloat(tempItems[j].winrate.toString()) > parseFloat(tempItems[j+1].winrate.toString())){
                        console.log(typeof tempItems[j].winrate)
                    // If the condition is true then swap them
                    var temp = tempItems[j]
                    tempItems[j] = tempItems[j + 1]
                    tempItems[j+1] = temp
                    }
            }
            }
        }
        else if(value === "Playrate"){
            console.log("pr")
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
        setType(type)
        let tempItems: any[] = []
        allItems.forEach(item => {
            if(item.type === value.toLowerCase()){
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
            <PageHead 
                title="TFT Items Tier List"
                text="Data-driven Teamfight Tactics items tier list"
                />
            <div className="sort-navigation-container">
                <div className="sort-dropdown-container">
                    <Dropdown 
                        name="Sort"
                        values={["Average Placement", "Winrate", "Playrate"]}
                        defaultValue="Average Placement"
                        onChange={handleSort}
                        />
                    <Dropdown 
                        name="Type"
                        values={["Normal", "Emblem", "Radiant", "Shimmerscale"]}
                        defaultValue="Normal"
                        onChange={handleType}
                        />
                </div>
                {width > 500 && <DefaultSearch initialValue="Search item" inputChange={handleSearch}/>}
            </div>
            <div className="augments-container">
                <div className="augments-titles">
                    <h4>Augments</h4>
                    <h4>Average Placement</h4>
                    <h4>Winrate</h4>
                    <h4>Playrate</h4>
                </div>
                {items.length > 0 ? items.map((item, index) => {
                    if(index <= toRender){
                        return (
                        <ItemRow id={item.id} name={item.name} avgPlacement={item.avgPlacement} winrate={item.winrate} playrate={item.playrate}/>
                        )
                    }
                }) : <TableLoader/>}
            </div>
            <PrimaryButton 
                text="Load more"
                fn={handleRenderMore}
                />
        </div>
    )
}

export default Augments
