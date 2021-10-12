'use strict'
var mysql = require('mysql'),
    conf = require('./db-confi.json'),
    dbOptions = {
        host            : conf.mysql.host,
        user            : conf.mysql.user,
        password        : conf.mysql.pass,
        database        : conf.mysql.db,
        port            : conf.mysql.port
    },
    myConn = mysql.createConnection(dbOptions)
myConn.connect((err)=>{
    return (err) ? console.log(`Error al conectarse a MySQL: ${err.stack}`) :
    console.log(`Conexión establecida con MySQL N°: ${myConn.threadId}`)
})
module.exports = myConn
