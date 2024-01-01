import { KoaController } from "../../../utils/KoaController";

export const getArea: KoaController = async (ctx) => {
  const uid = ctx.session.userid || 0;

  // Documentaion & ToDos:
  // The client seems to send the x and y co-ords of cells that it keeps track of on the map in the req body
  // The GetCells() function in MapRoom.as is important, as it checks for all the cells on the X co-ords, 
  // before returning the entire grid of X and Y co-ords (.data[cellX][cellY]) based on the grid size.

  ctx.status = 200;
  ctx.body = {
    error: 0,
    x: 490, // ZoneId = 4900000
    y: 0,
    data: {
      uid, // User ID
      fbid: "0", // Facebook ID
      pi: 0, // Invite Pending ID
      bid: 12345, // Base ID
      aid: 123456, // Alliance ID
      b: 0, // Base
      i: 50, // height
      mine: 0, // Unknown
      f: 1, // Flinger Level
      c: 1, // Catapult Level
      t: 0, // Truce
      n: "Placeholder name", // Name
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
    },
    // resources
    // alliancedata
  };
};
