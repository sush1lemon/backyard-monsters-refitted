const pino = require("pino");
const toLog = pino.transport({
  targets: [
    {
      level: 'info',
      target: 'pino/file',
      options: {
        destination: `data/app.log`
      },
    },
    {
      target: 'pino-pretty'
    }
  ]
});

const pretty = require("pino-pretty");
const logger = pino({}, toLog);

export const logging = (message: string, vars: unknown = "") => logger.info(`${message} ${vars}`);
export const errorLog = (message: string, vars: unknown = "") => logger.error(`${message} ${vars}`);
