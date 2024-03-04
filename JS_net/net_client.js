const net = require('net');

const client = net.createConnection({ host: '127.0.0.1', port: 8080 }, () => {
    console.log("Client Connected!");
    client.write("Hello from the Client 1");
});  

client.on('data', (serverData) => {
    console.log(`Reply from server: ${serverData.toString()}`)
});

client.on('error', (err) => {
    console.error("Connection error: ", err);
});