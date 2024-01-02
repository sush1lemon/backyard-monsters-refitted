import { KoaController } from "../../../utils/KoaController";

interface CellRequest {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
}

export const getArea: KoaController = async (ctx) => {
  const requestBody: CellRequest = ctx.request.body;

  for (const key in requestBody) {
    requestBody[key] = parseInt(requestBody[key], 10) || 0;
  }

  const x = requestBody.x;
  const y = requestBody.y;

  const maxX = 500;
  const maxY = 500;

  let data = {};

  // Map Generation: The map seems to process and generate a 10 x 10 grid in chunks

  for (let x = 0; x < maxX; x++) {
    data[x] = {};

    for (let y = 0; y < maxY; y++) {
      data[x][y] = {
        // User ID types
        // ctx.session.userid - real player | 0 - Wild Monsters | 0 - Other
        uid: 0,
        // Base types:
        // Wild Monster: 1 | Main Yard: 2 | Outpost: 3
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
        i: 109,
        // Owns cell
        mine: 0,
        // Flinger Level
        f: 1,
        // Catapult Level
        c: 1,
        // Truce
        t: 0,
        // Base names:
        // Options: username | Dreadnaut | Kozu | Legionnaire | Abunakki
        n: "Dreadnaut",
        // Friends
        fr: 0,
        // Player online
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
    x,
    y,
    data: data,
    // resources
    // alliancedata
  };
};
