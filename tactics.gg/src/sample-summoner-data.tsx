import icon from './images/icons/profile.jpg'
import chall from './images/icons/chall.png'

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

export {profile, stats, placements}