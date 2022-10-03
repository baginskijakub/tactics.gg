import React, {useState, useEffect} from 'react'
import AugmentRow from '../components/augments/AugmentRow'
import { Augment } from '../classes'
import Dropdown from '../components/buttons/Dropdown'
import { PrimaryButton } from '../components/buttons/PrimaryButton'
import { getAugmentsRanking } from '../model/Model'
import './pages.css'
import TableLoader from '../components/table/TableLoader'
import PageHead from './PageHead'

export const Augments:React.FC = () => {
    const[sort, setSort] = useState("Average Placement")
    const[toRender, setToRender] = useState(0);
    const[augments, setAugments] = useState<Augment[]>([])
    
    useEffect(() => {
        getAugmentsRanking().then((res) => {
            let tempAugments: Augment[] = []
            res.data.forEach((augment: any) => {
                tempAugments.push(new Augment(`https://ittledul.sirv.com/Images/augments/${augment.id}.png`, augment.id, augment.avg_place, augment.winrate, augment.frequency))
            })
            setAugments(tempAugments)
            setToRender(20)
        })

    }, [])

    function handleSort(value: string){
        setSort(value)
        let tempAugments = augments
        if(value === "Average Placement"){
             for(var i = 0; i < tempAugments.length; i++){
                console.log(tempAugments[i])
                // Last i elements are already in place 
                for(var j = 0; j < ( tempAugments.length - i -1 ); j++){
                    
                    // Checking if the item at present iteration
                    // is greater than the next iteration
                    if(tempAugments[j].avgPlacement > tempAugments[j+1].avgPlacement){
                        
                    // If the condition is true then swap them
                    var temp = tempAugments[j]
                    tempAugments[j] = tempAugments[j + 1]
                    tempAugments[j+1] = temp
                    }
            }
        }
        }
        else if(value === "Winrate"){
            for(var i = 0; i < tempAugments.length; i++){
                    
                // Last i elements are already in place 
                for(var j = 0; j < ( tempAugments.length - i -1 ); j++){
                    
                    // Checking if the item at present iteration
                    // is greater than the next iteration
                    if(parseFloat(tempAugments[j].winrate.toString()) < parseFloat(tempAugments[j+1].winrate.toString())){
                    // If the condition is true then swap them
                    var temp = tempAugments[j]
                    tempAugments[j] = tempAugments[j + 1]
                    tempAugments[j+1] = temp
                    }
            }
            }
        }
        else if(value === "Playrate"){
            for(var i = 0; i < tempAugments.length; i++){
                
                // Last i elements are already in place 
                for(var j = 0; j < (tempAugments.length - i -1 ); j++){
                    
                    // Checking if the item at present iteration
                    // is greater than the next iteration
                    if(tempAugments[j].frequency < tempAugments[j+1].frequency){
                        
                    // If the condition is true then swap them
                    var temp = tempAugments[j]
                    tempAugments[j] = tempAugments[j + 1]
                    tempAugments[j+1] = temp
                    }
            }
            }

        }
        setAugments(tempAugments)
    }

    function handleRenderMore(){
        let temp  = toRender;
        setToRender(temp + 20);
    }

    
    return (
        <div className="augments-wrapper">
            <PageHead 
                title="TFT Augments Tier List"
                text="Data-driven Teamfight Tactics Hextech Augments tier list"
                />
            <Dropdown 
                name="Sort"
                values={["Average Placement", "Winrate", "Playrate"]}
                defaultValue="Average Placement"
                onChange={handleSort}
                />
            <div className="augments-container">
                <div className="augments-titles">
                    <h4>Augments</h4>
                    <h4>Average Placement</h4>
                    <h4>Winrate</h4>
                    <h4>Playrate</h4>
                </div>
                {augments.length > 0 ? augments.map((augment, index) => {
                    if(index <= toRender){
                    return (
                    <AugmentRow augment={augment}/>
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

export default Augments
