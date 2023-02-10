import React, { useState, useEffect } from "react";
import "./pages.css";
import { searchSummoner } from "../model/Model";
import {PageHead} from './PageHead'
import {SummonerProfile} from "../components/summoner/SummonerProfile";
import {SummonerStats} from "../components/summoner/SummonerStats";
import {SummonerLast20} from "../components/summoner/SummonerLast20";
import {SummonerProgress} from "../components/summoner/SummonerProgress";
import {SummonerMatch} from "../components/summoner/SummonerMatch";
import {SummonerSearch} from "../components/search/SummonerSearch";
import {SummonerPlaceholder} from "../components/summoner/SummonerPlaceholder";

import {
  Match,
  Profile,
  Stats,
  Last20,
  Unit,
  Trait,
  Item,
  Companion,
} from "../classes";
import HorizontalAdd from "../components/ads/HorizontalAdd";

interface Props{
  name?: string
  region?: string
}

export const Summoner: React.FC<Props> = ({name, region}) => {
  const [placeholder, setPlaceholder] = useState("notFound");
  const [summonerName, setSummonerName] = useState("");
  const [profileState, setProfile] = useState<undefined | Profile>(undefined);
  const [statsState, setStats] = useState<undefined | Stats>(undefined);
  const [last20State, setLast20] = useState<undefined | Last20>(undefined);
  const [matchesState, setMatches] = useState<undefined | Match[]>(undefined);

  function handleSummoner(name: string, region: string) {
    setPlaceholder("loading");
    setMatches(undefined)
    searchSummoner(region, name).then((res: any) => {
      console.log(res)
      setProfile(
        new Profile(
          res.data.profile.name,
          res.data.profile.region,
          `https://raw.communitydragon.org/latest/game/assets/ux/summonericons/profileicon${res.data.profile.icon}.png`,
          res.data.profile.rank,
          res.data.profile.lp,
          res.data.profile.top,
          res.data.profile.ranking,
          `https://ittledul.sirv.com/Images/tiers/${
          res.data.profile.rank.split(" ")[0]
          }.png`
        )
      );
      setStats(
        new Stats(
          res.data.stats.gamesPlayed,
          res.data.stats.wins,
          res.data.stats.winsPercent,
          res.data.stats.top4,
          res.data.stats.top4Percent,
          res.data.stats.avgPlacement
        )
      );
      setLast20(
        new Last20(
          res.data.last20.placements,
          res.data.last20.avgPlacement,
          res.data.last20.top4Placements,
          res.data.last20.top4Procentage,
          res.data.last20.wins,
          res.data.last20.winsProcentage
        )
      );
      setMatches(
        res.data.matches.map((match: any) => {
          let augments = match.augments.map((augment: any) => {
            return augment.icon;
          });
          let traits = match.trait.map((trait: any) => {
            let arr = trait.name.split("_");
            let traitName = arr[1];
            return new Trait(
              arr[1],
              trait.currentTrait,
              trait.style,
              trait.icon
            );
          });

          let units = match.units.map((unit: any) => {
            let items = unit.items.map((item: any) => {
              return new Item(
                item.id,
                item.name,
                item.icon
              );
            });
            return new Unit(
              unit.id,
              unit.name,
              unit.cost,
              unit.icon,
              unit.level,
              items
            );
          });

          let players = match.players.map((player: any) => {
            let playerAugments = player.augments.map((augment: any) => {
              return augment.icon;
            });
            let playerTraits = player.traits.map((trait: any) => {
              let arr = trait.name.split("_");
              let traitName = arr[1];
              return new Trait(
                arr[1],
                trait.currentTrait,
                trait.style,
                trait.icon
              );
            });

            let playerUnits = player.units.map((unit: any) => {
              let items = unit.items.map((item: any) => {
                return new Item(
                  item.id,
                  item.name,
                  item.icon
                );
              });
              return new Unit(
                unit.id,
                unit.name,
                unit.cost,
                unit.icon,
                unit.level,
                items
              );
            });
            return new Companion(
              player.placement,
              `https://raw.communitydragon.org/latest/game/assets/ux/summonericons/profileicon${player.summonerIcon}.png`,
              player.summonerName,
              player.eliminated,
              playerAugments,
              playerTraits,
              playerUnits,
              player.goldLeft
            );
          });

          return new Match(
            match.placement,
            match.queueType,
            match.timeAgo,
            augments,
            units,
            traits,
            players
          );
        })
      );
      setPlaceholder("none")
      setSummonerName(res.data.profile.name);   
    })
  }
  useEffect(() => {
      if(name !== undefined && region !== undefined){
    handleSummoner(name, region)
  }
  }, [])

  return (
    <div className="summoner-wrapper">
      <HorizontalAdd/>
      <PageHead 
          title="TFT Summoner Search"
          text="Search a player and analyze his performance."
          canonical="/summoner"
          />
      <SummonerSearch handleInput={handleSummoner} />
      {placeholder === "none" ? (
        <div className="summoner-wrapper">
          <div className="summoner-container-horizontal">
            {profileState !== undefined && (
              <SummonerProfile
                name={profileState.name}
                region={profileState.region}
                icon={profileState.icon}
                rank={profileState.rank}
                lp={profileState.lp}
                top={profileState.top}
                ranking={profileState.ranking}
                rankIcon={profileState.rankIcon}
              />
            )}
            {statsState !== undefined && (
              <SummonerStats
                played={statsState.played}
                wins={statsState.wins}
                percentWins={statsState.percentWins}
                top4={statsState.top4}
                percentTop4={statsState.percentTop4}
                avgPlacement={statsState.avgPlacement}
              />
            )}
          </div>
          {last20State !== undefined && (
            <div className="summoner-container-horizontal">
              <SummonerLast20
                placements={last20State.placements}
                avgPlacement={last20State.avgPlacement}
                top4Placements={last20State.top4Placements}
                top4Procentage={last20State.top4Procentage}
                wins={last20State.wins}
                winsProcentage={last20State.winsProcentage}
              />
              <SummonerProgress />
            </div>
          )}
        </div>
      ) : (
        <SummonerPlaceholder state={placeholder} />
      )}
      {(matchesState !== undefined) && matchesState.map(match => {
          return(
            <SummonerMatch
              placement={match.placement}
              queueType={match.queueType}
              timeAgo={match.timeAgo}
              augments={match.augments}
              units={match.units}
              traits={match.traits}
              companion={match.companion}
            />
          )
      })
      }
      <HorizontalAdd/>
    </div>
  );
};
