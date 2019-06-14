const express = require('express');
const app = express();

// Importing of our page routes
const pageRoutes = require('./routes/pages');

// Register our page routes
app.use('/', pageRoutes);

// Exporting 
module.exports = app;