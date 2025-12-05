import { config } from 'dotenv';
config();

export const envConfig = {
  portNumber: 8000//process.env.PORT,//portwilltaken from dotenv
};
