import express from 'express';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import { getSoldierByID, getSoldierByQuery, insertSoldier } from '../controller/SoldierController';
import checkHealth from '../controller/HealthController';

const router = express();
router.use(helmet());

router.use(bodyParser());

router.get('/health', checkHealth);

router.post('/soldiers', insertSoldier);

router.get('/soldiers/:id', getSoldierByID);

router.get('/soldiers', getSoldierByQuery);

export default router;
