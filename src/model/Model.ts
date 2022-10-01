import axios from "axios";

function searchSummoner(region: string, summoner: string) {
  return axios.get(
    `https://tactixgg-server.herokuapp.com/summoner/${region}/${summoner}`
  );
}

function postComp(inputData: any){
  return axios.post('https://tactixgg-server.herokuapp.com/comps', {"inputData": inputData})
}

function getAugmentsRanking(){
  return axios.get('https://tactixgg-server.herokuapp.com/augments-ranking')
}

function getUnitsRanking(){
  return axios.get('https://tactixgg-server.herokuapp.com/units-ranking')
}

function getItemsRanking(){
  return axios.get('https://tactixgg-server.herokuapp.com/items-ranking')
}

function getComps(){
  return axios.get('http://tactixgg-server.herokuapp.com/preparedComps')
}

export { searchSummoner, postComp, getAugmentsRanking, getUnitsRanking, getItemsRanking, getComps };
