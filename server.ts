import { config } from 'dotenv';
import "reflect-metadata";
import app from './src/app';
config()

//database connection import
//import garena vane connect hudaina 

import "./src/database/connection"
function startServer() {
  const port = process.env.PORT;
  app.listen(8000, () => {
    console.log(`✅ Server has started at port ${port}`);
  });
}

startServer();
