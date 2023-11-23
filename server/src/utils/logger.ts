import { oldFileRemove } from "./oldFileRemove.js";
import { fileCompressDirectory } from "./fileCompress.js";

const prefix = "app-"
oldFileRemove(`data/logs/${prefix}*.log`, (1000 * 60 * 60 * 24) * 7)

fileCompressDirectory(`data/logs/${prefix}*.log`)

// Format: YYYY-MM-DD_HH-MM-SS
const date = new Date().toISOString().replace('T', '_').replace(/\..+/, '').replace(/:/g, '-')

const pino = require("pino");
const toLog = pino.transport({
  targets: [
    {
      level: 'info',
      target: 'pino/file',
      options: {
        destination: `data/logs/${prefix}${date}.log`
      }
    },
    {
      level: 'debug',
      target: 'pino/file',
      options: {
        destination: `data/logs/${prefix}${date}-debug.log`
      }
    },
    {
      target: 'pino-pretty'
    }
  ]
});

const pretty = require("pino-pretty");
const logger = pino({}, toLog);

export const logging = (message: string, vars: unknown = "") => logger.info(`${message} ${vars}`);
export const debugLog = (message: string, vars: unknown = "") => logger.debug(`${message} ${vars}`);
export const errorLog = (message: string, vars: unknown = "") => logger.error(`${message} ${vars}`);
