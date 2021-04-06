# ECommerceBackend13

# github-repo

https://github.com/epmjj4/ECommerceBackend13

# github-live-server

https://epmjj4.github.io/ECommerceBackend13/.

# heroku-deployed-link

I created a config folder that contains the mysql-connection.js file and the orm.js. The mysql-connection file has the database login information. The orm.js has the require driver setup to link to the mysql-conneciton file. There is an orm object that hast the selectAll, addOne, updateOne functions. These will run the functions and queries that will updated the the database. Inside the controllers folder, you'll find the burger-controls.js file. This file has the router and burger drivers setup as well as the get and post functions that will get and update data. In the db folder I have placed the myschema and seed files. In the models folder there is the burger.js file, this has the driver setup to connect to the orm.js file as well as the const burger object that has the selectAll, addOne, and updateOne functions. In the views folder I have the index.handlebars and a layouts folder that has the main.handlebars files that will receive and render data onto the browser. Finally the server.js file has the the drivers setup to use express and express handlebars, a driver to enable connection to the burger-control.js, PORT was setup and server is setup to listen once it has been started. 