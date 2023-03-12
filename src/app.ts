import bodyParser from 'body-parser';
import helmet from 'helmet';
import router from './routes/routes';
import logger from './logger';

const server = router;
const port = 3000;

server.use(bodyParser);

server.use(helmet);

server.listen(port, () => {
  logger.info(`Server listening on port ${port}`);
});

export default server;
