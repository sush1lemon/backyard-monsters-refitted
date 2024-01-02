import { KoaController } from "../../../utils/KoaController";
import { cellData } from "./cells/cellData";
import { homeCell } from "./cells/homeCell";

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

  // Creates 10 x 10 grid from 0 x 0 start
  const maxX = 10;
  const maxY = 10;

  let cells = {};

  for (let x = 0; x < maxX; x++) {
    cells[x] = {};

    for (let y = 0; y < maxY; y++) {
      cells[x][y] = { ...cellData(ctx) };

      if (x === 0 && y === 0) {
        cells[x][y] = { ...homeCell(ctx) };
      }
    }
  }

  ctx.status = 200;
  ctx.body = {
    error: 0,
    x,
    y,
    data: cells,
    // resources
    // alliancedata
  };
};
