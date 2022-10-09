import axios from "axios";

function searchSummoner(region: string, summoner: string) {
  return axios.get(
    `http://46.101.212.232/summoner/${region}/${summoner}`
  );
}

function postComp(inputData: any){
  return axios.post('http://46.101.212.232/comps', {"inputData": inputData})
}

function getAugmentsRanking(){
  return axios.get('http://46.101.212.232/augments-ranking')
}

function getUnitsRanking(){
  return axios.get('http://46.101.212.232/units-ranking')
}

function getItemsRanking(){
  return axios.get('http://46.101.212.232/items-ranking')
}

function getComps(){
  return axios.get('http://46.101.212.232/preparedComps')
}

function getLeaderboard(region: string){
  return axios.get(`http://46.101.212.232/leaderboard/${region}`)
}

export { searchSummoner, postComp, getAugmentsRanking, getUnitsRanking, getItemsRanking, getComps, getLeaderboard };
