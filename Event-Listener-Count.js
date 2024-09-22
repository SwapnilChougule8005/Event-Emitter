const EventEmitter = require('events');

class UserEmitter extends EventEmitter {
  registerUser(username) {
    this.emit('userRegistered', username);
  }
}

const userEmitter = new UserEmitter();

userEmitter.on('userRegistered', (username) => {
  console.log(`Sending welcome email to ${username}`);
});

userEmitter.on('userRegistered', (username) => {
  console.log(`admin notified: New user registered${username}`);
});

userEmitter.on('userRegistered', (username) => {
  console.log(`user registration logged for: ${username}`);
});

const count = EventEmitter.listenerCount(userEmitter, 'userRegistered');
console.log(`number of listeners for 'userRegistered': ${count}`); // Outputs: 3

userEmitter.registerUser('Swapnil');

