import 'axios'
import axios from 'axios'

async function getAllUnits(){
    let championsArr : any[] = new Array;
    await axios.get('https://raw.communitydragon.org/latest/cdragon/tft/en_us.json').then((res:any) => {
    res.data.setData[2].champions.forEach((element: any) => {
            if(element.traits.length > 0){
                let urlArr: string[] = element.icon.split("/")
                let elementUrl = urlArr[4]
                let url = `https://raw.communitydragon.org/latest/game/assets/characters/${element.apiName.toLowerCase()}/hud/${elementUrl.replace(".dds", "").toLowerCase()}.png`
                element.icon = url
                championsArr.push(element);
            }
        });
    })
    return championsArr;
}

async function getAllTraits(){
    let traitArr : any[] = new Array;
    await axios.get('https://raw.communitydragon.org/latest/cdragon/tft/en_us.json').then((res:any) => {
    res.data.setData[2].traits.forEach((element: any) => {
        
                // let urlArr: string[] = element.icon.split("/")
                // let elementUrl = urlArr[4]
                // let url = `https://raw.communitydragon.org/latest/game/assets/characters/${element.apiName.toLowerCase()}/hud/${elementUrl.replace(".dds", "").toLowerCase()}.png`
                // element.icon = url
                traitArr.push(element);
        });
    })
    console.log(traitArr)
    return traitArr;
}

export { getAllUnits, getAllTraits}