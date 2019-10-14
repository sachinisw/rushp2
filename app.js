const initServer = require('./server.js')
const httpsport = (process.env.PORT || 9090) //this is the port for Express backend server for the react front end
const httpport = (process.env.PORT || 9080)
const app = initServer()

//app[0].listen(httpsport)
//console.log(`Listening at https://localhost:${httpsport}`)

//TODO: disabled https for now. my certificate is bogus. need a valid certificate
app[1].listen(httpport)
console.log(`Listening at http://localhost:${httpport}`)
