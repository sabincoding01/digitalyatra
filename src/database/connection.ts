import { Sequelize } from "sequelize";
const sequelize = new Sequelize({
    database: process.env.DB_Name,
    username:  process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
host :process.env.DB_HOST,
dialect:"mysql", // datatbase are going to use
port : Number(process.env.DB_PORT)// default
});



sequelize.authenticate() 
.then(()=>{
console.log("Authicated connected successfully")
})
.catch((error)=>{
    console.log(error)
})

export default sequelize