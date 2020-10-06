const express = require('express');
const routes = require('./connections/routes');
const delete_route = require('./connections/delete_route')

var app = express();
app.set('view engine', 'ejs');
app.use(express.static('./public'));

delete_route(app);
routes(app);

app.listen(3000);
console.log('...NOW LISTENING ON PORT 3000...');