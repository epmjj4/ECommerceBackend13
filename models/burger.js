const orm = require('/config/orm.js');

//burger variable and callbacks

const burger = {
    //callback function to show all burgers in the db
selectAll: (callback) => {
    orm.selectAll('burgers', results => {
        callback(results)
    })
}, 
//Function to insert one burger from user input
addOne: (addition, callback) => {
    orm.add('burgers', 'burger_name', addition, results => {
        callback(results);
    })
}, 

// function to update if a burger has been devoured from user input
updateOne: (columnVAl, id, callback) => {
    orm.updateOne(columnValue, id, results => {
        callback(results);
    })
}
}

module.exports = burger;