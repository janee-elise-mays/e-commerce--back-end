require('dotenv').config();
const Sequelize = require('sequelize');

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  new Sequelize(
    // database name
    process.env.DB_NAME,
    // database user
    process.env.DB_USER,
    // database pw
    process.env.DB_PW,
    {
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      }
    }
    );
}

module.exports = sequelize;
