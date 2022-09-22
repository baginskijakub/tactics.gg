import axios from "axios";

function searchSummoner(region: string, summoner: string) {
  return axios.get(
    `http://tactixgg-server.herokuapp.com/summoner/${region}/${summoner}`
  );
}

function getUnitsData() {
  return axios.get("http://tactixgg-server.herokuapp.com/units");
}

function postComp(inputData: any){
  return axios.post('http://tactixgg-server.herokuapp.com/comps', {"inputData": inputData})
}

export { searchSummoner, getUnitsData, postComp };
