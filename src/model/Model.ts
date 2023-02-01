import axios from "axios";

function searchSummoner(region: string, summoner: string) {
  return axios.get(
    `https://server-tactixgg.com/summoner/${region}/${summoner}`
  );
}

function postComp(inputData: any, id:any){
  return axios.post('https://server-tactixgg.com/comps', {"inputData": inputData, "socketSessionId": id})
}

function getAugmentsRanking(){
  return axios.get('https://server-tactixgg.com/augments-ranking')
}

function getUnitsRanking(){
  return axios.get('https://server-tactixgg.com/units-ranking')
}

function getItemsRanking(){
  return axios.get('https://server-tactixgg.com/items-ranking')
}

function getComps(){
  return axios.get('https://server-tactixgg.com/preparedComps')
}

function getAugmentsRankingByStage(stage: string){
  if(stage == "2-1 (First)"){
    return axios.get('https://server-tactixgg.com/augments-ranking/1')
  }
  else if(stage == "3-2 (Second)"){
    return axios.get('https://server-tactixgg.com/augments-ranking/2')
  }
  else if(stage == "4-2 (Third)"){
    return axios.get('https://server-tactixgg.com/augments-ranking/3')
  }
  else{
    return getAugmentsRanking();
  }
}

function getLeaderboard(region: string){
  return axios.get(`https://server-tactixgg.com/leaderboard/${region}`)
}

function getCreatedComp(id: string){
  return axios.get(`https://server-tactixgg.com/comps/${id}`)
}

function saveCreatedComp(id: string, composition: any, analysis: any){
  return axios.post(`https://server-tactixgg.com/comps/${id}`, {"composition": composition, "analysis": analysis})
}

function getComparableAugments(){
  return axios.get('https://server-tactixgg.com/compare-augments')
}

function getAnalyzedCounterData(){
  return axios.get('https://server-tactixgg.com/generalData')
}



export { searchSummoner, postComp, getAugmentsRanking, getUnitsRanking, getItemsRanking, getComps, getLeaderboard, getAugmentsRankingByStage, getCreatedComp, saveCreatedComp, getComparableAugments, getAnalyzedCounterData};
