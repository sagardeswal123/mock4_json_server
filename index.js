const jsonServer = require('json-server');
const server = jsonServer.create();
const cors = require('cors');
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(cors());
server.use(middlewares);
server.use(router);
server.listen(4500,()=>{
    console.log("JSON server is running")
})