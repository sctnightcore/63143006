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

connection.query('INSERT INTO todo VALUES ("", "ซื้อผัก", 1, false, null, null)', function (error, results, fields) {
    if (error) throw error;
    console.log('data is: ', results);
});

connection.query('UPDATE todo SET todo_name = "พายายไปสวนสนุก" WHERE todo_id = 2', function (error, results, fields) {
    if (error) throw error;
    console.log('data is: ', results);
});

connection.query('DELETE FROM todo ORDER BY todo_id DESC LIMIT 1', function (error, results, fields) {
    if (error) throw error;
    console.log('data is: ', results);
});


connection.end();
