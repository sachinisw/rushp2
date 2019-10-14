const path = require('path')
const express = require('express')
const https = require('https');
const http = require('http');
const fs = require('fs');

//NodeJS uses CommonJS Module syntax (module.exports) not ES6 module syntax (export keyword).
module.exports = function initServer(){
    const app = express()
    const indexPath = path.join(__dirname, 'index.html')
    const publicPath = express.static(path.join(__dirname, 'public'))
    const imgPath = express.static(path.join(__dirname, 'images'))
    app.use('/public', publicPath)
    app.use('/images', imgPath)
    app.get('/', function (_, res) { 
		res.sendFile(indexPath)
	})
	
	const httpsServer = https.createServer({
	  key: fs.readFileSync(path.resolve('./keys/key.pem')),
	  cert: fs.readFileSync(path.resolve('./keys/cert.pem'))
	}, app);
	
	const httpServer = http.createServer(app);
    return [httpsServer,httpServer];
};
