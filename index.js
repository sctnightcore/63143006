var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'todo_list'
});

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results[0].solution);
});

connection.query('SELECT * FROM todo', function (error, results, fields) {
    if (error) throw error;
    console.log('data is: ', results);
});

connection.query('SELECT * FROM todo', function (error, results, fields) {
    if (error) throw error;
    console.log('data is: ', results);
});


connection.end();
