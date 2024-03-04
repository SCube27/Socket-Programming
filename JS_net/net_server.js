// The net modules are used to create a basic & raw tcp servers and clients and create a connection between them
// These work on transport layer so communication happens in console itself

const net = require('net');

PORT = 8080;

const server = net.createServer((socket) => {
    // Net module uses even driven arch
    socket.on('data', (clientData) => { // So define event before writing function to what to do during it
        console.log("Data receved from client: ", clientData.toString());
    });
    socket.write("Recieved the message Thank You!");
});

server.listen(PORT, () => {
    console.log(`Server listening on PORT ${PORT}`);
});