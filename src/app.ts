import express from 'express';
const app = express();
import authRoute from "./route/globals/auth/auth.routes"

app.use(express.json())
app.use("/api",authRoute)
export default app;
