const path = require('path')
const express = require('express')
const uuid = require('uuid/v4')

module.exports = {
  app: function () {
    const app = express()
	const uniqueId = uuid()
    const indexPath = path.join(__dirname, 'index.html')
    const publicPath = express.static(path.join(__dirname, 'public'))
	console.log(indexPath)
    app.use('/public', publicPath)
    app.get('/', function (_, res) { res.sendFile(indexPath) res.send(`Hit home page. Received the unique id: ${uniqueId}\n`) })

    return app
  }
}
