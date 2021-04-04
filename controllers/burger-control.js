const router = require('express').Router();
const burger = require('../models/burger');


//GET REQUEST to grab all burgers in the db and print them on the index page

router.get('/', (req, res) => {
    burger.selectAll(data => {
        const burgerObj = { burgers: data};
        res.render('index', burgerObj);
    })
})
 
// POST REQUEST inserting a burger into the database from user input. 

router.post('/insertOne', (req, res) => {
burger.addOne(req.body.burger_name,  () =>{
res.redirect('/');
}) 
})

//POST REQUEST - updating if a burger has been devoured or not
router.post('/updateOne/:id', (req, res) => {
    const colVal = 'id';
    const id = req.params.id;
    burger.updateOne(colVal, id, () => {
        res.redirect('/');
    })
})
module.exports = router;