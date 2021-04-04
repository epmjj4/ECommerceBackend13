//Import MySql connection object
const connection = require('./connection');

// variable to set object realtional mapping(orm)

const orm = {
    //function to set all burgers from the database
    selectAll: (tableName, callback) => {
        const querySelector = `SELECT * FROM ${tableName};`;
        connection.query(querySelector, (err, results) => {
            if(err){
                throw err;
            }
            callback(results);
        })
    },
    // function to add burger to the db from input
    addOne: (tableName, column, value, callback) => {
        const querySelector = `INSERT INTO ${tableName} (${column}) VALUES ('${value}');`;
        connection.query(querySelector, (err, results) => {
            if(err){
                throw err;
            }
            callback(results);
        })
    }, 
    //function to update one burger
    updateOne: (columnVal, id, callback) => {
        const querySelector = `UPDATE burgers SET devoured ='1' WHERE ${columnVal}=${id};`;
        connection.query(querySelector, [id], (err, results) => {
            if(err){
                throw err;
            }
            callback(results);
        })
    }
};

module.exports.orm











module.exports = orm;