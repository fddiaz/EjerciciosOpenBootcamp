const winston = require('winston');

const logger = winston.createLogger({
    level: 'error',
    format: winston.format.json(),
    defaultMeta: { service: 'user-service' },
    transports: [
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
    ],
});

///function myError() {
///    throw new Error("myError sin errores");
///}

try {
    myError();
} catch (e) {
    logger.error("Error erroneo", e.toString());
}