import { KoaController } from "../../../utils/KoaController";

export const getArea: KoaController = async (ctx) => {
  const uid = ctx.session.userid || 0;

  const maxX = 501;
  const maxY = 501;

  const data = {};

  for (let x = 0; x < maxX; x++) {
    data[x] = {};

    for (let y = 0; y < maxY; y++) {
      data[x][y] = {
        uid: uid, // User ID
        fbid: "0", // Facebook ID
        pi: 0, // Invite Pending ID
        bid: 1234, // Base ID
        aid: 0, // Alliance ID
        b: 0, // Base
        i: 50, // height
        mine: 0,
        f: 1, // Flinger Level
        c: 1, // Catapult Level
        t: 0, // Truce
        n: `Placeholder name`, // Name
        fr: 0, // Friends
        on: 1, // Online
        p: 0, // Damage Protection
        r: {}, // Resources
        m: {
          // Monsters
          hcc: {},
          h: {},
          housed: {},
        },
        l: 0, // Level
        d: 0, // Destroyed
        lo: 0, // Locked
        dm: 0, // Damage
        pic_square: "", // Picture
        im: "", // Image
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
