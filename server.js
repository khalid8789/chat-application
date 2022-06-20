var express = require('express');
var app = express();

app.use(express.static(__dirname + 'public'));

  if (process.env.NODE_ENV) {
    app.use(express.static(path.resolve(process.cwd(), 'client/build')))
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(process.cwd(), 'client/build/index.html'))
    })
  }

app.listen(process.env.PORT || 8080);