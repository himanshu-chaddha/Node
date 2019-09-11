const http = require("http");
const app = require("./app");
require("custom-env").env("envname");
const port = process.env.PORT || 3000;
// console.log(process.env.PORT);
const server = http.createServer(app);

server.listen(port);
