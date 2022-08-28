import asol from './images/champions/AurelionSol_1653030178.jpg'
import sylas from './images/champions/Sylas_1653029846.jpg'
import illaoi from './images/champions/Illaoi_1653030279.jpg'
import zoe from './images/champions/Zoe_1653030312.jpg'
import lulu from './images/champions/Lulu_1653029752 1.jpg'
import nami from './images/champions/Nami_1653029653.jpg'
import heimer from './images/champions/Heimerdinger_1653030456.jpg'
import vlad from './images/champions/Vladimir_1653029808.jpg'
import shoijn from './images/items/SpearofShojin_1642015208.jpg'
import archangel from './images/items/3285_8H5TqcPL1z03UB6hTyP9x6N5hZ9jVJIcf6YhxpUg.jpg'
import hextech from './images/items/HextechGunblade_1640058876.jpg'
import warmog from './images/items/3083_C5Y1EvfU08Ug9wCaCJTEp2hNRjh5zSkq9eoY97Uc.jpg'
import gargoyle from './images/items/IronWill_AnyIyxtEcc5fby5mgL1NNIwzm76wiG0yxwcPQ7nj.jpg'
import sunfire from './images/items/SunfireCape_1640059158.jpg'
import spell_thief from './images/traits/spellthief.svg'
import astral from './images/traits/astral.svg'
import mage from './images/traits/mage.svg'
import trainer from './images/traits/trainer.svg'
import evoker from './images/traits/evoker.svg'
import bruiser from './images/traits/bruiser.svg'
import mystic from './images/traits/mystic.svg'

class Item{
    id: number
    name: string
    url: string

    constructor(id: number, name: string, url: string){
        this.id = id;
        this.name = name;
        this.url = url;
    }
}

class Trait{
    name: string;
    currentTrait: number;
    traitStyle: number;
    url: string;

    constructor(name: string, currentTrait: number, traitStyle: number, url: string){
        this.name = name;
        this.currentTrait = currentTrait;
        this.traitStyle = traitStyle;
        this.url = url;
    }
}

class Unit {
    id: number;
    name: string;
    cost: number;
    url: string;
    isLevel3: boolean;
    items: Item[] | null;

    constructor(id: number, name: string, cost: number, url: string, isLevel3: boolean, items: Item[] | null) {
        this.id = id;
        this.name = name;
        this.cost = cost;
        this.url = url;
        this.isLevel3 = isLevel3;
        this.items = items;
    }
}

let SpearOfShoijn: Item = new Item(123, "Spear of Shoijn", shoijn)
let ArchangelStaff: Item = new Item(123, "Archangel Staff", archangel)
let HextechGunblade: Item = new Item(123, "Hextech Gunblade", hextech)
let GargoyleStoneplate: Item = new Item(123, "Gargoyle Stoneplate", gargoyle)
let Warmogs: Item = new Item(123, "Gargoyle Stoneplate", warmog)
let SunfireCape: Item = new Item(123, "Gargoyle Stoneplate", sunfire)

const asol_items: Item[] =  [ArchangelStaff, SpearOfShoijn, HextechGunblade]
const sylas_items: Item[] = [GargoyleStoneplate, Warmogs, SunfireCape]

let Asol: Unit = new Unit(123, "Aurelion Sol", 10, asol, false, asol_items);
let Sylas: Unit = new Unit(123, "Sylas", 3, sylas, true, sylas_items);
let Zoe: Unit = new Unit(123, "Zoe", 5, zoe, false, null);
let Illaoi: Unit = new Unit(123, "Illaoi", 3, illaoi, false, null);
let Lulu: Unit = new Unit(123, "Lulu", 3, lulu, false, null);
let Nami: Unit = new Unit(123, "Nami", 2, nami, false, null);
let Heimer: Unit = new Unit(123, "Heimerdinger", 1, heimer, false, null);
let Vlad: Unit = new Unit(123, "Vladimir", 1, vlad, false, null);

let Spell_thief = new Trait("Spell-thief", 1, 3, spell_thief );
let Astral = new Trait("Astral", 6, 2, astral);
let Mage = new Trait("Mage", 5, 2, mage);
let Trainer = new Trait("Trainer", 2, 1, trainer);
let Evoker = new Trait("Evoker", 2, 1, evoker);
let Bruiser = new Trait("Bruiser", 2, 1, bruiser);
let Mystic = new Trait("Mystic", 2, 1, mystic);

let units: Unit[] = [Asol, Sylas, Zoe, Illaoi, Lulu, Nami, Heimer, Vlad];
let traits: Trait[] = [Spell_thief, Astral, Mage, Trainer, Evoker, Bruiser, Mystic];

let comp = [units, traits];

export {units, traits};

