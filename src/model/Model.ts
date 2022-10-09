import axios from "axios";

function searchSummoner(region: string, summoner: string) {
  return axios.get(
    `https://server-tactixgg.com/summoner/${region}/${summoner}`
  );
}

function postComp(inputData: any){
  return axios.post('https://server-tactixgg.com/comps', {"inputData": inputData})
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

function getLeaderboard(region: string){
  return axios.get(`https://server-tactixgg.com/leaderboard/${region}`)
}

export { searchSummoner, postComp, getAugmentsRanking, getUnitsRanking, getItemsRanking, getComps, getLeaderboard };
