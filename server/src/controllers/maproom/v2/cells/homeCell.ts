import { Context } from "koa";

// Implement: All data should come from db to populate these properties
// Currently the majority of this data is hardcoded to emulate a player
export const homeCell = (ctx: Context) => {
  const userId = ctx.session.userid || 0;

  return {
    // User ID types
    // ctx.session.userid - real player | 0 - Wild Monsters | 0 - Other
    uid: userId,
    // Base types:
    // Wild Monster: 1 | Main Yard: 2 | Outpost: 3
    b: 2,
    // Facebook ID
    fbid: "0",
    // Invite Pending ID
    pi: 0,
    // Base ID - Important to configure
    // If == 'homebaseid', then it's the current user's yard.
    bid: 1,
    // Alliance ID
    aid: 0,
    // Cell terrains based on heights:
    // Water (< 100): water1: < 80 | water2: < 90 | else: water3
    // Sand: sand1: < 105 | sand2: < 110
    // Land: land1: < 120 | land2: < 140 | land3: < 160 | land4: < 170
    // Rock: land5: < 175 | else: land6
    i: 139,
    // Owns cell
    mine: 1,
    // Flinger Level
    f: 4,
    // Catapult Level
    c: 4,
    // Truce
    t: 0,
    // Base names:
    // Options: username | Dreadnaut | Kozu | Legionnaire | Abunakki
    n: "My Yard",
    // Friends
    fr: 0,
    // Online
    // Values: 0 - offline | 1 - online
    on: 0,
    // Damage Protection
    // Values: 0 - unprotected | 1 - protected
    p: 0,
    // Resources - ToDo
    r: {},
    // Monsters
    m: {
      hcc: {},
      h: [],
      housed: { C12: 1000, C14: 100 },
      overdrivepower: 1,
      overdrivetime: 0,
      saved: 0,
      space: 0,
    },
    // Level
    l: 56,
    // Destroyed
    d: 0,
    // Locked
    lo: 0,
    // Damage
    dm: 0,
    // Picture
    pic_square: "",
    // Image
    im: "",
  };
};
