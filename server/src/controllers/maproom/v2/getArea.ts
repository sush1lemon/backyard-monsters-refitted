import { KoaController } from "../../../utils/KoaController";

export const getArea: KoaController = async (ctx) => {

  ctx.status = 200;
  ctx.body = {
    error: 0,
    x: 2,
    y: 5,
    data: { // Figure this part out
      "20005": {
        data: {
          x: 10,
          y: 10
        }
      }
    }
    // resources, ToDo
    // alliancedata, ToDo
  };
};
