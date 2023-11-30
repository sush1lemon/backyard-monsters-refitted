import { Entity, Property, PrimaryKey } from "@mikro-orm/core";
import { FrontendKey } from "../utils/FrontendKey";

export interface FieldData {
  [key: string | number]: any;
}

@Entity()
export class Save {

  // basesaveid is probably for your own personal save data

  // Primatives
  @FrontendKey
  @PrimaryKey()
  basesaveid!: number;

  // baseid is probably for loading your opponent's data
  //  only used if `isInMapRoom3`
  @FrontendKey
  @Property()
  baseid!: string;

  @FrontendKey
  @Property()
  type!: string;

  @FrontendKey
  @Property()
  userid!: number;

  @FrontendKey
  @Property()
  wmid!: number;

  @FrontendKey
  @Property()
  createtime!: number;

  // If _lastProcessed (savetime) is less than (currenttime - 2 days (172800 seconds)) then set savetime to 2 days ago
  //  potentially used for locking progression to 2 days of progress while away if user is away so incentivize them to check back frequently?
  // Unix Timestamp (in seconds) - Last time base was saved
  @FrontendKey
  @Property()
  savetime!: number;

  @FrontendKey
  @Property()
  seed!: number;

  @FrontendKey
  @Property()
  saveuserid!: number;

  // Optional - Existence checked before access
  // Same as fan, sets bonus_bookmark to 1
  @FrontendKey
  @Property()
  bookmarked!: number;

  // Optional - Existence checked before access
  // `bonus_fan` = 1, assuming it means, you completed a certain quest and get a bonus
  @FrontendKey
  @Property()
  fan!: number;

  @FrontendKey
  @Property()
  emailshared!: number;

  @FrontendKey
  @Property()
  unreadmessages!: number;

  // Optional (sounds facebook-like) - Existence checked before access
  @FrontendKey
  @Property()
  giftsentcount!: number;

  @FrontendKey
  @Property()
  id!: number;

  @FrontendKey
  @Property()
  canattack!: boolean;

  @FrontendKey
  @Property()
  cellid!: number;

  @FrontendKey
  @Property()
  baseid_inferno!: number;

  @FrontendKey
  @Property()
  fbid!: string;

  @FrontendKey
  @Property()
  fortifycellid!: number;

  @FrontendKey
  @Property()
  name!: string;

  @FrontendKey
  @Property()
  level!: number;

  @FrontendKey
  @Property()
  catapult!: number;

  @FrontendKey
  @Property()
  flinger!: number;

  @FrontendKey
  @Property()
  destroyed!: number;

  @FrontendKey
  @Property()
  damage!: number;

  @FrontendKey
  @Property()
  locked!: number;

  @FrontendKey
  @Property()
  points!: number;

  @FrontendKey
  @Property()
  basevalue!: number;

  // Optional - Due to pre-condition, existence not checked before access, if pre-condition met, it should be set
  // Only used if done with tutorial
  @FrontendKey
  @Property()
  protected!: number;

  // Optional - Existence checked before access
  // If not supplied, default value 0
  @FrontendKey
  @Property()
  lastupdate!: number;

  // Optional - Existence checked before access, value not used directly
  // If Inferno Main Yard or Outpost, MapRoomVersion is 3 if currentMapRoom is MapRoom3 instance, otherwise MapRoomVersion 1
  // Otherwise (not inferno main yard or outpost) if currentMapRoom is MapRoom3 instance, it is MapRoom3, otherwise MapRoomVersion 2
  @FrontendKey
  @Property()
  usemap!: number;

  // Optional - Pre-conditions, existence checked before access
  // for Map Room Version 2 ONLY
  // and base mode must be BUILD (e_BASE_MODE.BUILD)
  @FrontendKey
  @Property()
  homebaseid!: number;

  @FrontendKey
  @Property()
  credits!: number;

  @FrontendKey
  @Property()
  champion!: string;

  // Optional - Existence checked before access
  @FrontendKey
  @Property()
  empiredestroyed!: number;

  @FrontendKey
  @Property()
  worldid!: string;

  @FrontendKey
  @Property()
  event_score!: number;

  @FrontendKey
  @Property()
  chatenabled!: number;

  @FrontendKey
  @Property()
  relationship!: number;

  // Probably sent by server and not generated on client
  //  so players couldn't change their clocks to confuse game
  // Unix Timestamp (in seconds)
  @FrontendKey
  @Property()
  currenttime!: number;

  // Client save primitives
  @FrontendKey
  @Property()
  timeplayed!: number;

  @FrontendKey
  @Property()
  version!: number;

  @FrontendKey
  @Property()
  clienttime!: number;

  @FrontendKey
  @Property()
  baseseed!: number;

  @FrontendKey
  @Property()
  healtime!: number;

  @FrontendKey
  @Property()
  empirevalue!: number;

  // Note to self:
  // Continue here for documentation, BASE#handleBaseLoadSuccessful:1056
  @FrontendKey
  @Property()
  basename!: string;

  @FrontendKey
  @Property()
  attackreport!: string;

  @FrontendKey
  @Property()
  over!: number;

  @FrontendKey
  @Property()
  protect!: number;

  @FrontendKey
  @Property()
  attackid!: number;

  @FrontendKey
  @Property()
  purchasecomplete!: number;

  // Optional - Pre-conditions
  // Must be MapRoom3
  //  if buildingdata.building.t is 14 or 112
  //   Error logged
  // buildingdata: [
  //   {
  //     t: // int
  //
  //   }
  // ]
  @FrontendKey
  @Property({ type: "json", nullable: true })
  buildingdata?: FieldData;

  @FrontendKey
  @Property({ type: "json", nullable: true })
  buildingkeydata?: FieldData;

  @FrontendKey
  @Property({ type: "json", nullable: true })
  researchdata?: FieldData;

  @FrontendKey
  @Property({ type: "json", nullable: true })
  stats?: FieldData;

  @FrontendKey
  @Property({ type: "json", nullable: true })
  academy?: FieldData;

  @FrontendKey
  @Property({ type: "json", nullable: true })
  rewards?: FieldData;

  // @FrontendKey
  // @Property({ type: "json", nullable: true })
  // takeover?: FieldData; // this creates an in-game popup that can't be dismissed until maproom is fixed

  @FrontendKey
  @Property({ type: "json", nullable: true })
  aiattacks?: FieldData;

  @FrontendKey
  @Property({ type: "json", nullable: true })
  monsters?: FieldData;

  // Optional - Existence checked before access
  // resources: {
  //   r1: // int
  //   r2: // int
  //   r3: // int
  //   r4: // int
  //   r1bonus: // int
  //   r2bonus: // int
  //   r3bonus: // int
  //   r4bonus: // int
  // }
  @FrontendKey
  @Property({ type: "json", nullable: true })
  resources?: FieldData;

  @FrontendKey
  @Property({ type: "json", nullable: true })
  lockerdata?: FieldData;

  @FrontendKey
  @Property({ type: "json", nullable: true })
  events?: FieldData;

  @FrontendKey
  @Property({ type: "json", nullable: true })
  inventory?: FieldData;

  @FrontendKey
  @Property({ type: "json", nullable: true })
  monsterbaiter?: FieldData;

  @FrontendKey
  @Property({ type: "json", nullable: true })
  loot?: FieldData;

  @FrontendKey
  @Property({ type: "json", nullable: true })
  storedata?: FieldData;

  @FrontendKey
  @Property({ type: "json", nullable: true })
  coords?: FieldData;

  @FrontendKey
  @Property({ type: "json", nullable: true })
  quests?: FieldData;

  // Structure
  // player: {
  //   buffs: {
  //     resources: // s_resourceCells
  //   }
  // }
  @FrontendKey
  @Property({ type: "json", nullable: true })
  player?: FieldData;

  @FrontendKey
  @Property({ type: "json", nullable: true })
  krallen?: FieldData;

  @FrontendKey
  @Property({ type: "json", nullable: true })
  siege?: FieldData;

  // Optional - Existence checked before access
  // buildingresources: {
  //   b${homeBaseId}: // Deleted if set, effectively useless
  //   t: // Converted to a number (is unix timestamp) if set and base mode must be attack or AUTOBANK_FIX enabled
  //      // Otherwise _lastProcessed is used
  //      // Additionally, it has check for if timestamp is older than 2 days, if so, set it to 2 days ago
  //   // It doesn't seem to access all properties using specific keys but the values inside of those keys sometimes
  //   r: {
  //   // If any key has r1 then r{1-4} is expected
  //     r1: // int
  //     r2: // int
  //     r3: // int
  //     r4: // int
  //   }
  //   // Otherwise if the object does not have the `r1` key
  //   anyKey: {
  //     height: // int, default 100
  //     t: // 1 <= t < 5 (t can be 1-4)
  //     l: // If set outpostProps produces `l`
  //        //  Otherwise outpost produces 0
  //        // Either way it adds resources to the desired
  //        //  t (resource type) with this equation
  //        //
  //        // Math.max(int(_loc10_ * GLOBAL._averageAltitude.Get() / _loc8_),1); // com.monsters.autobanking.AutoBankManager#updateLoadData:146
  //   }
  // }
  //
  //
  @FrontendKey
  @Property({ type: "json", nullable: true })
  buildingresources?: FieldData;

  // Optional - Existence not checked but empty object assigned to it
  //  I assume through some AS shenanigans, only if the variable
  //  is not only assigned otherwise server data would never be used
  //
  // mushrooms: {
  //   l: [] // list of mushrooms
  //   s: // number, last spawned mushroom
  // }
  @FrontendKey
  @Property({ type: "json", nullable: true })
  mushrooms?: FieldData;

  // Optional - Existence checked before access
  // iresources: {
  //   r1: // int
  //   r2: // int
  //   r3: // int
  //   r4: // int
  //   r1max: // int
  //   r2max: // int
  //   r3max: // int
  //   r4max: // int
  // }
  @FrontendKey
  @Property({ type: "json", nullable: true })
  iresources?: FieldData;

  @FrontendKey
  @Property({ type: "json", nullable: true })
  monsterupdate?: FieldData;

  // Must be supplied if
  @FrontendKey
  @Property({ type: "json", nullable: true })
  buildinghealthdata?: FieldData;

  @FrontendKey
  @Property({ type: "json", nullable: true })
  frontpage?: FieldData;

  @Property()
  createdAt: Date = new Date();

  @Property({ onUpdate: () => new Date() })
  lastupdateAt: Date = new Date();

  // Client save objects
  @FrontendKey
  @Property({ type: "json", nullable: true })
  purchase?: FieldData;

  @FrontendKey
  @Property({ type: "json", nullable: true })
  attackcreatures?: FieldData;

  @FrontendKey
  @Property({ type: "json", nullable: true })
  attackloot?: FieldData;

  @FrontendKey
  @Property({ type: "json", nullable: true })
  lootreport?: FieldData;

  @FrontendKey
  @Property({ type: "json", nullable: true })
  attackersiege?: FieldData;

  // Optional - Pre-conditions, existence checked before access
  // If length > 0
  //
  // updates: [
  //   {
  //     data: [] // may be object or array of objects
  //     id: // int
  //     fbid:
  //     name:
  //   }
  // ]
  @FrontendKey
  @Property({ type: "json", nullable: true })
  updates: any[];

  @FrontendKey
  @Property({ type: "json", nullable: true })
  effects: (string | number)[][];

  // Optional - Pre-conditions, existence checked before access
  // If it is MapRoom2 and base mode is BUILD
  //  array must have exactly 2 elements that are not negative
  // or if it is MapRoom3
  //  No size or negative number check
  //
  // homebase: [
  //   "" // x
  //   "" // y
  // ]
  // Coerced to ints, could be int array
  @FrontendKey
  @Property({ type: "json", nullable: true })
  homebase: string[];

  // Optional - Pre-conditions (homebase MapRoom2 conditions), existence checked before access
  // outposts: [
  //   {
  //     "" // x
  //     "" // y
  //     "" // id
  //   }
  // ]
  //
  //
  @FrontendKey
  @Property({ type: "json", nullable: true })
  outposts: string[][];

  @FrontendKey
  @Property({ type: "json", nullable: true })
  worldsize: number[];

  @FrontendKey
  @Property({ type: "json", nullable: true })
  wmstatus: number[][];

  @FrontendKey
  @Property({ type: "json", nullable: true })
  chatservers: string[];

  // Client save arrays
  @FrontendKey
  @Property({ type: "json", nullable: true })
  achieved: any[];

  @FrontendKey
  @Property({ type: "json", nullable: true })
  attacks: any[];

  @FrontendKey
  @Property({ type: "json", nullable: true })
  gifts: any[];

  @FrontendKey
  @Property({ type: "json", nullable: true })
  sentinvites: any[];

  @FrontendKey
  @Property({ type: "json", nullable: true })
  sentgifts: any[];

  @FrontendKey
  @Property({ type: "json", nullable: true })
  attackerchampion: any[];

  @FrontendKey
  @Property({ type: "json", nullable: true })
  fbpromos: any[];

  public static jsonKeys: (keyof FieldData)[] = [
    "buildingdata",
    "buildingkeydata",
    "researchdata",
    "stats",
    "rewards",
    // "takeover",
    "aiattacks",
    "monsters",
    "resources",
    "lockerdata",
    "events",
    "inventory",
    "monsterbaiter",
    "mushrooms",
    "monsterupdate",
    "buildinghealthdata",
    "frontpage",
    "academy",
    "loot",
    "storedata",
    "coords",
    "quests",
    "player",
    "krallen",
    "siege",
    "buildingresources",
    "purchase",
    "attackcreatures",
    "attackloot",
    "lootreport",
    "attackersiege",
    "updates",
    "effects",
    "homebase",
    "outposts",
    "worldsize",
    "wmstatus",
    "chatservers",
    "achieved",
    "attacks",
    "gifts",
    "sentinvites",
    "sentgifts",
    "attackerchampion",
    "fbpromos",
  ];
}
