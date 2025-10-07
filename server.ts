import { envConfig } from './src/config';
import app from './src/app';

function startServer() {
  const port = Number(envConfig.portNumber) || 3000;
  app.listen(port, () => {
    console.log(`✅ Server has started at port ${port}`);
  });
}

startServer();
