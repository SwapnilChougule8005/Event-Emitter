// using try catch
const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

const fetchDataFromApi = async () => {
      return new Promise((resolve) => {
          setTimeout(() => {
              resolve("Data from API");
          }, 1000);
      });
  };
  
eventEmitter.on('asyncEvent', async () => {
      try {
          const data = await fetchDataFromApi();
          console.log(data);
      } catch (error) {
          console.error('Error fetching data:', error);
      }
  });

eventEmitter.emit('asyncEvent');*/

// using async await 
const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

const fetchData = () => new Promise((resolve) => {
    setTimeout(() => resolve('Data fetched!'), 2000);
});

eventEmitter.on('fetch', async () => {
    const data = await fetchData();
    console.log(data);
});

eventEmitter.emit('fetch');

  