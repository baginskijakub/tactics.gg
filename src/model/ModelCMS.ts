import axios from "axios";
axios.defaults.headers.common['X-API-KEY'] ="61452844-8b8f-43c7-a845-3099e6824ee4";

function analyzeCoreUnits(inputData: any[]){
    return axios.post('https://server-tactixgg.com/cms', {"inputData": inputData})
}

function getCMSComps(){
    return axios.get('https://server-tactixgg.com/cms/comps')
}

function saveComp(inputData: any){
    return axios.post('https://server-tactixgg.com/cms/save', {"composition": inputData, "visibility": true})
}

function changeVisibility(id: number, visibility: boolean){
    return axios.post('https://server-tactixgg.com/cms/changeVisibility', {"id": id, "visibility": visibility})
}

function deleteComp(id: number){
    return axios.delete(`https://server-tactixgg.com/cms/comps/${id}`)
}

export {analyzeCoreUnits, saveComp, getCMSComps, changeVisibility, deleteComp}