import { Sequelize } from "sequelize-typescript";

const sequelize = new Sequelize({
  database: "DigitalYatra", //process.env.DB_NAME,
  username: "root",//process.env.DB_USERNAME,
  password: "", //process.env.DB_PASSWORD,
  host: "localhost",//process.env.DB_HOST,
  dialect: "mysql",
  port: 3306,//Number(process.env.DB_PORT),
  models: [__dirname + '/models'], // ✅ works with sequelize-typescript
});

sequelize
  .authenticate()
  .then(() => console.log("Authenticated successfully"))
  .catch((err) => console.error("Connection error:", err));

sequelize
  .sync({ alter: false })
  .then(() => console.log("Migrated successfully"));

export default sequelize;
