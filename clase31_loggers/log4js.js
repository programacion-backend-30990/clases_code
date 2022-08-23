// log4J
const log4js = require('log4js')

log4js.configure({
    appenders: {
        myLoggerConsole: {type: "console"},
        myLoggerFile: {type: 'file', filename: 'info.log'},
        myLoggerFile2: {type: 'file', filename: 'info2.log'}
    },
    categories: {
        default: {appenders: ['myLoggerConsole', 'myLoggerFile'], level: "trace"},
        consola: {appenders: ['myLoggerConsole'], level: "debug"},
        archivo: {appenders: ['myLoggerFile'], level: "warn"},
        archivo2: {appenders: ['myLoggerFile2'], level: "info"},
        todos: {appenders: ['myLoggerConsole', 'myLoggerFile'], level: "error"}
    }
})

/**
 * trace
 * debug
 * info
 * warn
 * error
 * fatal
 */

const logger = log4js.getLogger('archivo2');
logger.trace('Cogimos una cerveza')
logger.debug('La cerveza es Corona')
logger.info('La cervaza esta fria')
logger.warn('La cerveza se sesta calentando')
logger.error('La cerveza se cayo')
logger.fatal('Se quebro la cerveza')

const express = require('express')
const app = express()

const typeLog = (process.env.NODE_ENV == 'prod') ? 'todos' : 'consola'
const logger22 = log4js.getLogger(typeLog);

app.get('/:num?', (req, res) => {
    let num = req.params.num

    if (num == 'favicon.ico') {
        logger22.warn('No es apto para el navegador')
        return res.send('ok')
    }

    if (!num) {
        logger22.trace('No viene data num, default 0')
        num = 0
    } else {
        logger22.info(`Num es ${num}`)
    }
    
    let result = 0
    if (num != 0) {
        result = 500 / num
    } else {
        logger22.error('Num no puede ser 0')
    }
    logger22.info(`Result es ${result}`)

    res.send({result})

})

app.listen(8080)