const express = require('expreess');

const exphbs = require('express-handlebars');

const app = express();

const routes = require('./controller/burger-control');

const PORT = process.env.PORT || 8080;
// Server can render static files from the "public" folder.
app.use(express.static('public'));

//parse the body of the application

app.use(express.urlencoded({ extended: ture}));
app.use(express.json());

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


app.use(routes);

// Listener for the port number
app.listen(PORT, () => { 
    console.log(`Listening on port: ${PORT}`);
})
