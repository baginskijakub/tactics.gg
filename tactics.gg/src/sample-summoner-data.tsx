import icon from './images/icons/profile.jpg'
import chall from './images/icons/chall.png'

import asol from './images/champions/AurelionSol_1653030178.jpg'
import sylas from './images/champions/Sylas_1653029846.jpg'
import illaoi from './images/champions/Illaoi_1653030279.jpg'
import zoe from './images/champions/Zoe_1653030312.jpg'
import lulu from './images/champions/Lulu_1653029752.jpg'
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
import aug from './images/aug.png'

class Profile{
    name: string
    region: string
    icon: string
    rank: number
    tier: string
    lp: number
    top: number
    ranking: number
    rankIcon: string

    constructor(name: string, region: string, icon: string, rank: number, tier: string, lp: number, top: number, ranking: number, rankIcon: string){
        this.name = name;
        this.region = region;
        this.icon = icon;
        this.rank = rank;
        this.tier = tier;
        this.lp = lp;
        this.top = top;
        this.ranking = ranking;
        this.rankIcon = rankIcon;
    }
}

class Stats{
    played: number
    wins: number
    percentWins: number
    top4: number
    percentTop4: number
    avgPlacement: number

    constructor(played: number, wins: number, percentWins: number, top4: number, percentTop4: number, avgPlacement: number){
        this.played = played;
        this.percentWins = percentWins;
        this.wins = wins;
        this.top4 = top4;
        this.percentTop4 = percentTop4;
        this.avgPlacement = avgPlacement;
    }
}

let profile = new Profile("SH1RCANE", "EU West", icon, 1, "Challenger", 925, 27.32, 184, chall);
let stats =  new Stats(623, 98, 15.8, 357, 59.1, 4.21)
let placements = [1, 4, 2, 6, 5, 8, 3, 4, 2, 2, 3, 4, 1, 7, 4, 2, 8, 5]

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
    level: 0 | 1 | 2 | 3;
    items: Item[] | null;

    constructor(id: number, name: string, cost: number, url: string , level: 0 | 1 | 2 | 3, items: Item[] | null) {
        this.id = id;
        this.name = name;
        this.cost = cost;
        this.url = url;
        this.level = level;
        this.items = items;
    }
}

class Companion{
    placement: number
    icon: string
    name: string
    roundEliminated: string
    augments: string[]
    traits: Trait[]
    units: Unit[]
    goldLeft: number
    
    constructor(placement: number, icon: string, name: string, roundEliminated: string, augments: string[], traits: Trait[], units: Unit[], goldLeft: number){
        this.placement = placement;
        this.icon = icon;
        this.name = name;
        this.roundEliminated = roundEliminated;
        this.augments = augments;
        this.traits = traits;
        this.units = units;
        this.goldLeft = goldLeft;
    }
}

class Match{
    placement: number
    queueType: "Ranked" | "Normal"
    timeAgo: string
    augments: string[]
    units: Unit[]
    traits: Trait[]
    companion: Companion[]

    constructor(placement: number, queueType: "Ranked" | "Normal", timeAgo: string, augments: string[], units: Unit[], traits: Trait[], companion: Companion[]){
        this.placement = placement;
        this.queueType = queueType;
        this.timeAgo = timeAgo;
        this.augments = augments;
        this.units = units;
        this.traits = traits;
        this.companion = companion;
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

let Asol: Unit = new Unit(123, "Aurelion Sol", 10, asol, 0, asol_items);
let Sylas: Unit = new Unit(123, "Sylas", 3, sylas, 3, sylas_items);
let Zoe: Unit = new Unit(123, "Zoe", 5, zoe, 0, null);
let Illaoi: Unit = new Unit(123, "Illaoi", 3, illaoi, 0, null);
let Lulu: Unit = new Unit(123, "Lulu", 3, lulu, 0, null);
let Nami: Unit = new Unit(123, "Nami", 2, nami, 0, null);
let Heimer: Unit = new Unit(123, "Heimerdinger", 1, heimer, 0, null);
let Vlad: Unit = new Unit(123, "Vladimir", 1, vlad, 0, null);

let Spell_thief = new Trait("Spell-thief", 1, 3, spell_thief );
let Astral = new Trait("Astral", 6, 2, astral);
let Mage = new Trait("Mage", 5, 2, mage);
let Trainer = new Trait("Trainer", 2, 1, trainer);
let Evoker = new Trait("Evoker", 2, 1, evoker);
let Bruiser = new Trait("Bruiser", 2, 1, bruiser);
let Mystic = new Trait("Mystic", 2, 1, mystic);

let units: Unit[] = [Asol, Sylas, Zoe, Illaoi, Lulu, Nami, Heimer, Vlad];
let traits: Trait[] = [Spell_thief, Astral, Mage, Trainer, Evoker, Bruiser, Mystic];

let companion1: Companion = new Companion(1, icon, "baginski", "6-4", [aug, aug, aug], traits, units, 43);
let companion2: Companion = new Companion(2, icon, "woyak", "6-4", [aug, aug, aug], traits, units, 2);
let companion3: Companion = new Companion(3, icon, "NadimCoSięUmył", "6-2", [aug, aug, aug], traits, units, 19);
let companion4: Companion = new Companion(4, icon, "Hedrekao", "6-1", [aug, aug, aug], traits, units, 8);
let companion5: Companion = new Companion(5, icon, "simplywojtek", "5-5", [aug, aug, aug], traits, units, 3);
let companion6: Companion = new Companion(6, icon, "ANO shreddin", "5-5", [aug, aug, aug], traits, units, 1);
let companion7: Companion = new Companion(7, icon, "ANO Kezman", "5-4", [aug, aug, aug], traits, units, 11);
let companion8: Companion = new Companion(8, icon, "sh1rcane", "5-2", [aug, aug, aug], traits, units, 0);

let match: Match = new Match(5, "Ranked", "3 hours ago", [aug, aug, aug], units, traits, [companion1, companion2, companion3, companion4, companion5, companion6, companion7, companion8])
let matches: Match[] = [match, match, match, match, match, match, match, match, match, match, ]
export {profile, stats, placements, matches}