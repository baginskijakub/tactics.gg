import axios from "axios";

function searchSummoner(region: string, summoner: string){
    return axios.get(`http://tactixgg-server.herokuapp.com/summoner/${region}/${summoner}`);
}

export {searchSummoner}