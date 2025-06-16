const winston=require("winston");
const { LOGGER_DB_URL } = require("./serverConfig");
require("winston-mongodb");
const allowedTransports =[];


allowedTransports.push(new winston.transports.Console({
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss'
        }),
        // Second argument to the combine method, which defines what is exactly going to be printed in log
        winston.format.printf((log) => `${log.timestamp} [${log.level}]: ${log.message}`)
    )
}));
allowedTransports.push(new winston.transports.MongoDB({
    level:"error",
    db:LOGGER_DB_URL,
    collection:"log"
}));
allowedTransports.push(new winston.transports.File({
    filename:`app.log`
}))

const logger = winston.createLogger({
    // default formatting

    format: winston.format.combine(
        // First argument to the combine method is defining how we want the timestamp to come up
        winston.format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss'
        }),
        // Second argument to the combine method, which defines what is exactly going to be printed in log
        winston.format.printf((log) => `${log.timestamp} [${log.level.toUpperCase()}]: ${log.message}`)
    ),
    transports: allowedTransports
});
module.exports=logger;