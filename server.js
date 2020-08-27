'use strict'

const ftpd = require('simple-ftpd')

console.log("Server running, now connect to localhost:1337 in your FTP client")

ftpd({ host: '127.0.0.1', port: 1337, root: './' }, (session) => {

  session.on('pass', (username, password, cb) => {
    console.log(username, password);
    cb();
  })
})