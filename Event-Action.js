
// const EventEmitter = require('events');
// const userLogger = new EventEmitter();

// function logUserAction(action) {
//     userLogger.on('logAction', () => {
//         console.log(`user action: ${action}`);
//     })
// }

// logUserAction('login');
// logUserAction('logout');
// logUserAction('login');

// userLogger.emit('logAction');

/*const EventEmitter = require('events');
const userLogger = new EventEmitter();

function logUserAction(action) {
    userLogger.emit('logAction', action);
}
userLogger.on('logAction', (action) => {
    console.log(`User action: ${action}`);
});

logUserAction('login');
logUserAction('logout');*/

const EventEmitter = require('events');
const userLogger = new EventEmitter();

function logUserAction(action) {
    userLogger.on('logAction', () => {
        console.log(`User action: ${action}`);
    });
}

// Register actions
logUserAction('login');  // Registers listener for 'login'
logUserAction('logout'); // Registers listener for 'logout'

// Emit the logAction event
userLogger.emit('logAction');
