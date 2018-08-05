import express from 'express';

const PORT = 4000;
const server = express();

server.set('port', PORT);

server.get('/', (request, response) => {
  response.send("App is running");
}).listen(server.get('port'), () => {
  console.log('Server is running on port number', server.get('port'));
});
