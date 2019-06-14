const express = require('express');

const app = express();

// our routes 
const routes = require('./routes.js');
 app.use('/', routes);

 // view configuration
const path = require('path');
app.set('views', path.join(__dirname, 'views'));

// We need to install pug (template engine)
app.set('view engine', 'pug');



app.listen(4000, () => console.log(`App listening on port 4000, roger that?`));