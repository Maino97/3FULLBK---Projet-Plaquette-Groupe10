const mysql = require('mysql');
const express = require('express');
var app = express();
const bodyparser = require('body-parser');

const fees = require('./fees.js');
const fees_type = require('./fees_type.js');
const managers = require('./managers.js');
const certifications = require('./certifications.js');

app.use(bodyparser.json());

var mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodeproject',
    multipleStatements: true
});

mysqlConnection.connect((err) => {
    if (!err)
        console.log('DB connection succeded.');
    else
        console.log('DB connection failed \n Error : ' + JSON.stringify(err, undefined, 2));
});

app.listen(3000, () => console.log('Express server is runnig at port no : 3000'));



fees(app, mysqlConnection);
fees_type(app, mysqlConnection);
managers(app, mysqlConnection);
certifications(app, mysqlConnection);
