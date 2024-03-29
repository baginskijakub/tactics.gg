import 'axios'
import axios from 'axios'

async function getAllUnits(){
    let championsArr : any[] = new Array;
    await axios.get('https://raw.communitydragon.org/latest/cdragon/tft/en_us.json').then((res:any) => {
    res.data.setData[8].champions.forEach((element: any) => {
            if(element.traits.length > 0){
                let urlArr: string[] = element.icon.split("/")
                let elementUrl = urlArr[4]
                let url = `https://raw.communitydragon.org/latest/game/assets/characters/${element.apiName.toLowerCase()}/hud/${elementUrl.replace(".dds", "").toLowerCase()}.png`
                if(element.icon.includes("Stage2")){
                    
                    const elementUrlArray = elementUrl.split('.')
                    elementUrlArray[0] += '_square'
                    const stage2Url = elementUrlArray.join('.')
                    url = `https://raw.communitydragon.org/latest/game/assets/characters/${element.apiName.toLowerCase()}/hud/${stage2Url.replace(".dds", "").replace(".tft", "_square.tft").toLowerCase()}.png`
                }

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
    res.data.setData[8].traits.forEach((element: any) => {
        
                // let urlArr: string[] = element.icon.split("/")
                // let elementUrl = urlArr[4]
                // let url = `https://raw.communitydragon.org/latest/game/assets/characters/${element.apiName.toLowerCase()}/hud/${elementUrl.replace(".dds", "").toLowerCase()}.png`
                // element.icon = url
                traitArr.push(element);
        });
    })
    return traitArr;
}

async function getAllItems(){
    let normalItems: any[] = new Array()
    let radiantItems: any[] = new Array()
    let emblemItems: any[] = new Array()

    await axios.get('https://raw.communitydragon.org/latest/cdragon/tft/en_us.json').then((res:any) => {
        res.data.items.forEach((item: any) => {
            if(item.apiName.startsWith('TFT_Item') || item.apiName.startsWith('TFT8_Item') || item.apiName.startsWith('TFT5_Item')){
                let url: string = `https://raw.communitydragon.org/latest/game/${item.icon.replace('.dds', '.png').toLowerCase()}`
                let iconArr: string[] = item.icon.split("/")
                //regular item case, id > 10 to remove components, id !== 4441 to remove empty slot
                if(iconArr[5] === "Standard"){
                    normalItems.push({
                        id: item.apiName,
                        name: item.name,
                        src: url
                    })
                }
                //emblems, no futher checks so far
                else if(iconArr[5] === "Traits"){
                    emblemItems.push({
                        id: item.apiName,
                        name: item.name,
                        src: url
                    })
                }
                //radaint
                else if(iconArr[5] === "Radiant"){
                    radiantItems.push({
                        id: item.apiName,
                        name: item.name,
                        src: url
                    })
                }
            }
        })
    })

    const itemIdsToRemove: string[] = [
        'TFT_Item_Blank',
        'TFT_Item_ChainVest',
        'TFT_Item_RecurveBow',
        'TFT_Item_TearOfTheGoddess',
        'TFT_Item_NegatronCloak',
        'TFT_Item_SparringGloves',
        'TFT_Item_Spatula',
        'TFT_Item_BFSword',
        'TFT_Item_GiantsBelt',
        'TFT_Item_NeedlesslyLargeRod',
        'TFT_Item_ForceOfNature',
    ]
    normalItems = normalItems.filter(item => {
        return !itemIdsToRemove.includes(item.id)
    })

    return {
        normalItems: normalItems,
        radiantItems: radiantItems,
        emblemItems: emblemItems
    }
}

export { getAllUnits, getAllTraits, getAllItems}