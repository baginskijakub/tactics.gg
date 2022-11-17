import axios from 'axios'

function getAugmentsData(){
    return axios.get('https://raw.communitydragon.org/pbe/cdragon/tft/en_us.json');
}

export {getAugmentsData}

