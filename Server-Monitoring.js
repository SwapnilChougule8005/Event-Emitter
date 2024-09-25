const os = require('os');
const EventEmitter = require('events');

class ServerMonitor extends EventEmitter {
    constructor() {
        super();
        this.checkServerLoad();
    }
checkServerLoad() {
        setInterval(() => {
            const cpuLoad = os.loadavg()[0];
            const memoryUsage = this.getMemoryUsage();

            if (cpuLoad > 1.5) {
                this.emit('overload', { type: 'CPU', value: cpuLoad });
            }

            if (memoryUsage > 80) {
                this.emit('overload', { type: 'Memory', value: memoryUsage });
            }
        }, 1000);
    }

    getMemoryUsage() {
        const totalMemory = os.totalmem();
        const usedMemory = totalMemory - os.freemem();
        return (usedMemory / totalMemory) * 100; 
    }
}

const monitor = new ServerMonitor();

monitor.on('overload', ({ type, value }) => {
    console.warn(`Warning: Server overload detected! ${type} Load: ${value.toFixed(2)}`);
});

