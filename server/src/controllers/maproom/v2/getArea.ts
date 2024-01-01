import { KoaController } from "../../../utils/KoaController";

export const getArea: KoaController = async (ctx) => {
  const uid = ctx.session.userid || 0;

  const maxX = 500;
  const maxY = 500;

  const data = {};

  // Map Generation: The map seems to process and generate a 10 x 10 grid in chunks

  for (let x = 0; x < maxX; x++) {
    data[x] = {};

    for (let y = 0; y < maxY; y++) {
      data[x][y] = {
        // User ID - ctx.session.userid for real player
        uid: 0,
        // Base types:
        // Wild Monster: 1
        b: 1,
        // Facebook ID
        fbid: "0",
        // Invite Pending ID
        pi: 0,
        // Base ID
        bid: 1234,
        // Alliance ID
        aid: 0,
        // Cell terrains based on heights:
        // Water (< 100): water1: < 80 | water2: < 90 | else: water3
        // Sand: sand1: < 105 | sand2: < 110 
        // Land: land1: < 120 | land2: < 140 | land3: < 160 | land4: < 170
        // Rock: land5: < 175 | else: land6
        i: 104,
        // Owns cell
        mine: 0,
        // Flinger Level
        f: 1,
        // Catapult Level
        c: 1,
        // Truces
        t: 0,
        // Base names:
        // Options: username | Dreadnaut | Kozu | Legionnaire | Abunakki
        n: `Kozu`,
        // Friends
        fr: 0,
        // Is currently online
        on: 1,
        // Damage Protection
        p: 0,
        // Resources - ToDo
        r: {},
        // Monsters
        m: {
          hcc: {},
          h: {},
          housed: {},
        },
        // Level
        l: 0,
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
    }
  }

  ctx.status = 200;
  ctx.body = {
    error: 0,
    x: 490,
    y: 0,
    data: data,
    // resources
    // alliancedata
  };
};
