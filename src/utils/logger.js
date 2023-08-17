const { createLogger, transports, format } = require('winston');
const { PROJECT } = require('./constants');

const logFormat = format.combine(
    format.colorize(),
    format.label({ label: PROJECT }),
    format.timestamp({ format: 'MM-DD-YYYY HH:mm:ss' }),
    format.printf(({ level, message, label, timestamp, ...info }) => {
        let log = `${timestamp} [${label}] [${level}]`;

        if (Object.keys(info).length > 0) {
            log += '\nAdditional Info: ' + JSON.stringify(info, null, 2);
        }

        log += '\nMessage: ' + message + '\n';

        return log;
    })
);

module.exports.logger = createLogger({
    transports: [
        new transports.Console({
            level: 'debug',
            format: logFormat,
        }),
        new transports.File({
            level: 'info',
            filename: 'logs/info.log',
        }),
        new transports.File({
            level: 'warn',
            filename: 'logs/warn.log',
        }),
        new transports.File({
            level: 'error',
            filename: 'logs/error.log',
        }),
        new transports.File({
            filename: 'logs/logs.log', // Log all levels to log.log
        }),
    ],
});
