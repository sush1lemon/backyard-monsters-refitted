import { Context } from "koa";

export const homeCell = (ctx: Context) => {
  const userId = ctx.session.userid || 0;

  return {
    uid: userId,
    b: 2,
    fbid: "0",
    pi: 0,
    bid: 1, // ToDo: Set this to 'homebaseid' from db
    aid: 0,
    i: 139,
    mine: 0,
    f: 1,
    c: 1,
    t: 0,
    n: "Player",
    fr: 0,
    on: 0,
    p: 0,
    r: {},
    m: {
      hcc: {},
      h: {},
      housed: {},
    },
    l: 56,
    d: 0,
    lo: 0,
    dm: 0,
    pic_square: "",
    im: "",
  };
};
