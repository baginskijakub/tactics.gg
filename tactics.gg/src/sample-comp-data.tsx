import asol from "./images/champions/AurelionSol_1653030178.jpg";
import sylas from "./images/champions/Sylas_1653029846.jpg";
import illaoi from "./images/champions/Illaoi_1653030279.jpg";
import zoe from "./images/champions/Zoe_1653030312.jpg";
import lulu from "./images/champions/Lulu_1653029752.jpg";
import nami from "./images/champions/Nami_1653029653.jpg";
import heimer from "./images/champions/Heimerdinger_1653030456.jpg";
import vlad from "./images/champions/Vladimir_1653029808.jpg";
import shoijn from "./images/items/spear_of_shojin.png";
import archangel from "./images/items/archangel_staff_radiant.png";
import hextech from "./images/items/hextech_gunblade.png";
import warmog from "./images/items/warmogs_armor.png";
import gargoyle from "./images/items/gargoyle_stoneplate.png";
import sunfire from "./images/items/sunfire_cape.png";
import spell_thief from "./images/traits/spellthief.svg";
import astral from "./images/traits/astral.svg";
import mage from "./images/traits/mage.svg";
import trainer from "./images/traits/trainer.svg";
import evoker from "./images/traits/evoker.svg";
import bruiser from "./images/traits/bruiser.svg";
import mystic from "./images/traits/mystic.svg";
import aug from "./images/aug.png";

import {
  Item,
  Trait,
  Unit,
  UnitHex,
  Variation,
  UnitItems,
  ItemUnit,
  Augment,
} from "./classes";

let SpearOfShoijn: Item = new Item(123, "Spear of Shoijn", shoijn);
let ArchangelStaff: Item = new Item(123, "Archangel Staff", archangel);
let HextechGunblade: Item = new Item(123, "Hextech Gunblade", hextech);
let GargoyleStoneplate: Item = new Item(123, "Gargoyle Stoneplate", gargoyle);
let Warmogs: Item = new Item(123, "Gargoyle Stoneplate", warmog);
let SunfireCape: Item = new Item(123, "Gargoyle Stoneplate", sunfire);

const asol_items: Item[] = [ArchangelStaff, SpearOfShoijn, HextechGunblade];
const sylas_items: Item[] = [GargoyleStoneplate, Warmogs, SunfireCape];

let Asol: Unit = new Unit(123, "Aurelion Sol", 10, asol, 0, asol_items);
let Sylas: Unit = new Unit(123, "Sylas", 3, sylas, 3, sylas_items);
let Zoe: Unit = new Unit(123, "Zoe", 5, zoe, 0, null);
let Illaoi: Unit = new Unit(123, "Illaoi", 3, illaoi, 0, null);
let Lulu: Unit = new Unit(123, "Lulu", 3, lulu, 2, null);
let Nami: Unit = new Unit(123, "Nami", 2, nami, 2, null);
let Heimer: Unit = new Unit(123, "Heimerdinger", 1, heimer, 1, null);
let Vlad: Unit = new Unit(123, "Vladimir", 1, vlad, 1, null);

let Spell_thief = new Trait("Spell-thief", 1, 3, spell_thief);
let Astral = new Trait("Astral", 6, 2, astral);
let Mage = new Trait("Mage", 5, 2, mage);
let Trainer = new Trait("Trainer", 2, 1, trainer);
let Evoker = new Trait("Evoker", 2, 1, evoker);
let Bruiser = new Trait("Bruiser", 2, 1, bruiser);
let Mystic = new Trait("Mystic", 2, 1, mystic);

let units: Unit[] = [Asol, Sylas, Zoe, Illaoi, Lulu, Nami, Heimer, Vlad];
let traits: Trait[] = [
  Spell_thief,
  Astral,
  Mage,
  Trainer,
  Evoker,
  Bruiser,
  Mystic,
];

let empty: UnitHex = new UnitHex(null, null, null, null, 0, null);

let row1: UnitHex[] = [empty, empty, empty, Sylas, empty, empty, empty];
let row2: UnitHex[] = [empty, Illaoi, empty, empty, Vlad, empty, empty];
let row3: UnitHex[] = [empty, empty, empty, empty, empty, empty, empty];
let row4: UnitHex[] = [Zoe, Heimer, empty, empty, Nami, Lulu, Asol];

let positioning = [row1, row2, row3, row4];

let Items_SpearOfShoijn = new ItemUnit(shoijn, "Spear of Shoijn", null);
let Items_Archangel = new ItemUnit(archangel, "Archangel Staff", null);
let Items_Hextech = new ItemUnit(hextech, "Hextech Gunblade", null);
let Items_Rate = new ItemUnit(warmog, "Hextech Gunblade", 17.06);
let ItemsArrayBIS = [Items_Archangel, Items_Hextech, Items_SpearOfShoijn];
let ItemsArrayRate = [
  Items_Rate,
  Items_Rate,
  Items_Rate,
  Items_Rate,
  Items_Rate,
  Items_Rate,
];

let Asol_Items = new UnitItems(
  "Aurelion Sol",
  asol,
  10,
  ItemsArrayBIS,
  ItemsArrayRate
);
let Sylas_Items = new UnitItems(
  "Aurelion Sol",
  sylas,
  3,
  ItemsArrayBIS,
  ItemsArrayRate
);
let Illaoi_Items = new UnitItems(
  "Aurelion Sol",
  illaoi,
  3,
  ItemsArrayBIS,
  ItemsArrayRate
);
let Zoe_Items = new UnitItems(
  "Aurelion Sol",
  zoe,
  5,
  ItemsArrayBIS,
  ItemsArrayRate
);

let augmentPlaceholder = new Augment(aug, "Protable Forge", 3.68, 19.9, 3.2);
let augments = [
  augmentPlaceholder,
  augmentPlaceholder,
  augmentPlaceholder,
  augmentPlaceholder,
  augmentPlaceholder,
  augmentPlaceholder,
  augmentPlaceholder,
  augmentPlaceholder,
  augmentPlaceholder,
];

let items = [Asol_Items, Sylas_Items, Illaoi_Items, Zoe_Items];

let variation = new Variation(3.89, 59.68, units, traits);
let variations = [variation, variation, variation];

export { units, traits, positioning, items, augments, variations };
