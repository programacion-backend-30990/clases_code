const logger = require('pino')()

logger.level = 'info'

logger.info('Pino info')
logger.error('That error is horrible')

logger.info('The answer was %d', 42)

logger.info({a: 33}, 'Saludos a Emmanuel')
logger.info({a: {d: 412, b: 72}}, 'Saludos a Javier Perez')

const childLogger = logger.child({a: 'Property'})
childLogger.info('Log from child')
childLogger.error('Breaking Bad')