import mongoose from 'mongoose';
import logger from '../logger';

mongoose.set('strictQuery', false);
const mongoDB = 'mongodb://127.0.0.1:27017/test';

mongoose.connect(mongoDB).then(() => { logger.info('Connected To database :)'); })
  .catch((err) => logger.info('error', err));
export default mongoose;
