const { createLogger, format, transports } = require('winston'); 

const logger = createLogger({
    level: 'warn',
    format: format.combine( format.timestamp(), format.json( )),
    transports: [
        new transports.Console({ level: 'verbose'}),
        new transports.File({ filename: 'info.log', level: 'error'})
    ]
})

/**
 * silly
 * debug
 * verbose
 * info
 * warn
 * error
 * 
 */

logger.silly('log silly')
logger.debug('log debug')
logger.verbose('log verbose')
logger.info('log info')
logger.warn('log warn')
logger.error('log error')