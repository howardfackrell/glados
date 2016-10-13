const server = require('simple-server-setup');
 
server.create(app => {
 
    app.get('/', (req, res) => {
      res.send('http - simple-server-setup');
    });
 
  })
  .then(server => console.log(`Listening at ${server.url}`))
;