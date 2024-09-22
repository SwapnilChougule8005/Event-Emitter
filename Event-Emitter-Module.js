const EventEmitter = require('events');

class Logger extends EventEmitter {
  logInfo(message) {
    this.emit('info', message);
  }

  logWarn(message) {
    this.emit('warn', message);
  }

  logError(message) {
    this.emit('error', message);
  }

  logDebug(message) {
    this.emit('debug', message);
  }

  logSuccess(message) {
    this.emit('success', message);
  }

  logCritical(message) {
    this.emit('critical', message);
  }

  logTrace(message) {
    this.emit('trace', message);
  }

  logNotice(message) {
    this.emit('notice', message);
  }

  logAlert(message) {
    this.emit('alert', message);
  }

  logPerformance(message) {
    this.emit('performance', message);
  }
}

const logger = new Logger();

logger.on('info', (msg) => console.log(`Info: ${msg}`));
logger.on('warn', (msg) => console.warn(`Warning: ${msg}`));
logger.on('error', (msg) => console.error(`Error: ${msg}`));
logger.on('debug', (msg) => console.debug(`Debug: ${msg}`));
logger.on('success', (msg) => console.log(`Success: ${msg}`));
logger.on('critical', (msg) => console.error(`Critical: ${msg}`));
logger.on('trace', (msg) => console.log(`Trace: ${msg}`));
logger.on('notice', (msg) => console.log(`Notice: ${msg}`));
logger.once('alert', (msg) => console.warn(`Alert: ${msg}`));
logger.on('performance', (msg) => console.log(`Performance: ${msg}`));
logger.once('alert', (msg) => console.warn(`Alert: ${msg}`));
logger.on('warn', (msg) => console.warn(`Warning: ${msg}`));
logger.once('alert', (msg) => console.warn(`Alert: ${msg}`));



logger.logInfo('Application has initialized successfully');
logger.logWarn('High memory usage');
logger.logDebug('Debugging the application flow');
logger.logError('Database connection failed');
logger.logSuccess('Operation completed successfully');
logger.logCritical('Critical failure in the system');
logger.logTrace('Tracing the execution path');
logger.logNotice('This is a notice for your information');
logger.logAlert('This is an alert that needs attention');
logger.logPerformance('Performance metrics collected');
