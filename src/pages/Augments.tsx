import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import {AugmentRow} from '../components/augments/AugmentRow'
import { AugmentRow as Augment } from '../classes'
import {Dropdown} from '../components/buttons/Dropdown'
import { PrimaryButton } from '../components/buttons/PrimaryButton'
import { getAugmentsRanking, getAugmentsRankingByStage } from '../model/Model'
import { DefaultSearch } from "../components/search/DefaultSearch";
import './pages.css'
import {TableLoader} from '../components/table/TableLoader'
import {PageHead} from './PageHead'
import {AnalyzedCounter} from './AnalyzedCounter'
import HorizontalAdd from '../components/ads/HorizontalAdd'
import AugmentsHowTo from '../components/howToUse/AugmentsHowTo'

export const Augments:React.FC = () => {
    const[sort, setSort] = useState("Average Placement")
    const[tier, setTier] = useState("All")
    const[stage, setStage] = useState("All")
    const[toRender, setToRender] = useState(0);
    const [searched, setSearched] = useState("");
    const[augments, setAugments] = useState<Augment[]>([])
    const[allAugments, setAllAugments] = useState<Augment[]>([])
    const [width, setWidth] = React.useState(window.innerWidth);
    let navigate = useNavigate();

    //change navbar on breakpoint
    React.useEffect(() => {
        window.addEventListener("resize", () => setWidth(window.innerWidth));
    }, []);
    
    useEffect(() => {
        getAugmentsRanking().then((res) => {
            let tempAugments: Augment[] = []
            res.data.forEach((augment: any) => {
                let name = augment.id
                let tier = 0
                tempAugments.push(new Augment(augment.icon, augment.name, augment.avg_place, augment.winrate, augment.frequency, tier))
            })
            setAugments(tempAugments)
            setAllAugments(tempAugments)
            setToRender(20)
        })

    }, [])

    function sortAugments(augments: Augment[], value: string){
        let tempAugments = augments
        if(value === "Average Placement"){
             for(var i = 0; i < tempAugments.length; i++){
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
        else if(value === "Win Rate"){
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
        else if(value === "Play Rate"){
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
        return tempAugments
    }

    function handleSort(value: string){
        setSort(value)
        
        setAugments(sortAugments(augments, value))
    }

    function handleSearch(value:string){

            let BreakException = {};

            setSearched(value);
            let arr: Augment[] = [];
            allAugments.forEach((augment) => {
                try{
                        if(augment.name.toLowerCase().includes(value.toLowerCase())){
                            arr.push(augment);
                            throw BreakException;
                        }
                }
                catch (e){
                    if (e !== BreakException) throw e;
                }
            })
        setAugments(arr)     
    }

    function handleRenderMore(){
        let temp  = toRender;
        setToRender(temp + 20);
    }

    function getAugmentsByTier(augments: Augment[], value: string){
        let tempArr: Augment[] = []
        if(value === "All"){
            tempArr = augments
        }
        else if(value === "Silver"){
            augments.forEach(augment => {
                if(augment.tier === 1){
                    tempArr.push(augment)
                }
            })
        }
        else if(value === "Gold"){
            augments.forEach(augment => {
                if(augment.tier === 2){
                    tempArr.push(augment)
                }
            })
        }
        else if(value === "Prismatic"){
            augments.forEach(augment => {
                if(augment.tier === 3){
                    tempArr.push(augment)
                }
            })
        }
        return tempArr
    }

    function handleTier(value: string){
        setTier(value);
        setAugments(getAugmentsByTier(allAugments, value))
    }

    function handleStage(value: string){
            setStage(value);
            getAugmentsRankingByStage(value).then((res) => {
                console.log(res)
                let tempAugments: Augment[] = []
                res.data.forEach((augment: any) => {
                    tempAugments.push(new Augment(augment.icon, augment.name, augment.avg_place, augment.winrate, augment.frequency, 0))
                })
                let tierApplied = getAugmentsByTier(tempAugments, tier);
                let sortApplied = sortAugments(tierApplied, sort)

                setAugments(sortApplied)
                setAllAugments(tempAugments)

            })

    }

    // useEffect(() => {
    //     handleTier(tier)
    //     handleSort(sort)
    // }, [stage])

    function navigateToCompareAugments(){
        navigate('/compareAugments')
    }
    
    return (
        <div className="augments-wrapper">
            <HorizontalAdd/>
            <PageHead 
                title="TFT Augments Tier List"
                text="Data-driven Teamfight Tactics Hextech Augments tier list"
                canonical="/augments"
                buttonText='Compare Augments'
                buttonOnClick={navigateToCompareAugments}
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
                    name="Tier"
                    values={["All", "Silver", "Gold", "Prismatic"]}
                    defaultValue="All"
                    onChange={handleTier}
                    />
                <Dropdown 
                    name="Stage"
                    values={["All", "2-1", "3-2", "4-2"]}
                    defaultValue="All"
                    onChange={handleStage}
                    />
                {width > 500 && <DefaultSearch initialValue="Search augment" inputChange={handleSearch}/>}
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
            <HorizontalAdd/>
            <AugmentsHowTo/>
            <HorizontalAdd/>
        </div>
    )
}
