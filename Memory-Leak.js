// Detecting Memory Leaks

const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.setMaxListeners(20);

for (let i = 0; i < 21; i++) {
    eventEmitter.on('event', () => {
        console.log(`Listener ${i} execute`);
    });
}
eventEmitter.emit('event');

// Avoiding Memory Leaks  using once()
eventEmitter.once('singleUseEvent', () => {
    console.log('This will only be logged once.');
});

eventEmitter.emit('singleUseEvent');
eventEmitter.emit('singleUseEvent'); // ignore because use once

// Remove listeners using removeListener()
const listener = () => {
    console.log('This listener will be removed.');
};
eventEmitter.on('event', listener);

eventEmitter.removeListener('event', listener);

eventEmitter.emit('event'); // no output because remove listener

// Remove listeners removeAllListeners()
eventEmitter.on('event', () => {
    console.log('Listener 1');
});
eventEmitter.on('event', () => {
    console.log('Listener 2');
});

eventEmitter.removeAllListeners('event');

eventEmitter.emit('event'); // No output because all listeners remove
