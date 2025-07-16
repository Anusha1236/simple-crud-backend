const mongoose = require('mongoose');
const plates = require('./plate.model');
const db={};
db.mongoose = mongoose;
db.plates = plates;
module.exports = db;
