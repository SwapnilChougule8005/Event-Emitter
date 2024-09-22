const EventEmitter = require('events');

class CustomEmitter extends EventEmitter {
    constructor() {
        super();
    }

    fireEvent() {
        this.emit('fire', ' custom event here');
    }

    successEvent(message) {
        this.emit('success', message);
    }

    errorEvent(errorMessage) {
        this.emit('error', errorMessage);
    }
}

const customEmitter = new CustomEmitter();

customEmitter.on('fire', (message) => {
    console.log(`Fire event: ${message}`);
});

customEmitter.on('success', (message) => {
    console.log(`Success event: ${message}`);
});
customEmitter.on('error', (errorMessage) => {
    console.error(`Error event: ${errorMessage}`);
});


customEmitter.fireEvent();
customEmitter.successEvent('operation complete successfully.');
customEmitter.errorEvent('error occurred operation.');


