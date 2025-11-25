import { Sequelize } from "sequelize-typescript";

const sequelize = new Sequelize({
  database: process.env.DB_NAME,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  dialect: "mysql",
  port: Number(process.env.DB_PORT),
  models: [__dirname + '/models'], // ✅ works with sequelize-typescript
});

sequelize
  .authenticate()
  .then(() => console.log("Authenticated successfully"))
  .catch((err) => console.error("Connection error:", err));

sequelize
  .sync({ force: true })
  .then(() => console.log("Migrated successfully"));

export default sequelize;
