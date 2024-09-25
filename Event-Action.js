const EventEmitter = require('events');
const userLogger = new EventEmitter();

function logUserAction(action) {
    userLogger.emit('logAction', action);
}
userLogger.on('logAction', (action) => {
    console.log(`User action: ${action}`);
});

logUserAction('login');
logUserAction('logout');
