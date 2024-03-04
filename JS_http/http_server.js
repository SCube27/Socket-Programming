// Used for the connection of http over basic tcp connection (Browser communication)
// So this http module is used to create http servers
// These work on application layer so communication happens on browser

const http = require('http');

PORT = 3000;

const server = http.createServer((req, res) => {
    console.log("New connection was created");
    if(req.url === '/about') {
        res.end("There's no about section for such apps");
    }
    else {
        res.end("Your server connection is established");
    }
});

server.listen(PORT, () => {
    console.log(`Server started as PORT ${PORT}`);
});