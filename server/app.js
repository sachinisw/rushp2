const Server = require('./server.js')
const port = (process.env.PORT || 9090) //this is the port for Express backend server for the react front end
const app = Server.app() //defined in server.js

app.listen(port)
console.log(`Listening at http://localhost:${port}`)
