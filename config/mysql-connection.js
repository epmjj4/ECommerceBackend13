const mysql = require('mysql');

const connection = mysql.createConnection({
    host:'localhost',
    port:3306,
    user: 'root',
    password:'password',
    database:'burgershop_db'
});

connection.connect( err => {
    if (err) {
        //Will show the stack trace of the error in mysql
        console.log(`There's an error connecting ${err.stack}`)
        return;
    }
    console.log(`Connected as id: ${connection.threadId}`);
});

module.exports = connection;
