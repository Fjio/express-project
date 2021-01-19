const monk = require('monk');
const dbUrl = process.env.DB_URL;

const db = monk(dbUrl);

module.exports = db;
