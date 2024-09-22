const EventEmitter = require('events');

class Chat extends EventEmitter {
    constructor() {
      super();
      this.users = new Set(); 
    }
  
    addUser(user) {
      this.users.add(user);
      this.emit('userJoined', user);
    }
  
    removeUser(user) {
      this.users.delete(user);
      this.emit('userLeft', user);
    }
  
    sendMessage(user, message) {
      this.emit('message', user, message);
    }
  }
  
  const chatRoom = new Chat();
  
  chatRoom.on('userJoined', (user) => {
    console.log(`${user} joined the chat.`);
  });
  
  chatRoom.on('userLeft', (user) => {
    console.log(`${user} left the chat.`);
  });
  
  chatRoom.on('message', (user, message) => {
    console.log(`${user} says: ${message}`);
  });
  
  chatRoom.addUser('Swapnil');
  chatRoom.sendMessage('Swapnil', 'Hello, everyone');
  chatRoom.addUser('Vrushabh');
  chatRoom.sendMessage('Vrushabh', 'Hey, Swapnil');
  chatRoom.removeUser('Swapnil');
  