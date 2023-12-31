import { KoaController } from "../../../utils/KoaController";

export const getArea: KoaController = async (ctx) => {

  ctx.status = 200;
  ctx.body = {
    error: 0,
    x: 50,
    y: 50,
    data: {}
    // resources, ToDo
    // alliancedata, ToDo
  };
};
