const mysql = require('mysql');

var pool = mysql.createPool({
    "user":"TesteAula",
    "password":"TesteAula0123",
    "database":"TesteAula",
    "host":"localhost"

});
exports.pool = pool;