const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorAliases: false,
  pool: {
    max: dbConfig.dialect.max,
    min: dbConfig.dialect.min,
    acquire: dbConfig.dialect.min,
    idle: dbConfig.dialect.idle,
  }
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.order = require("./order")(sequelize, Sequelize);
db.order_detail = require("./order_detail")(sequelize, Sequelize);
db.payment = require("./payment")(sequelize, Sequelize);
db.product = require("./product")(sequelize, Sequelize);
db.user = require("./user")(sequelize, Sequelize);
db.produksi = require("./produksi")(sequelize, Sequelize);

module.exports = db;
