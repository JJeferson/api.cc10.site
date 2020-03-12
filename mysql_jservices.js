const mysql = require('mysql');

var pool = mysql.createPool({
    "user":"j-services",
    "password":"senha aqui",
    "database":"j-services",
    "host":"localhost"

});
exports.pool = pool;


 