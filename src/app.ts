import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import compression from 'compression';
import bodyParser from 'body-parser';
import { errors as celebrateErrors } from 'celebrate';
import filesRoutes from './files/routes/index';
import versionRoutes from './version/routes/index';
import errorsHandler from './utils/errorsHandler';

const { MORGAN_FORMAT = 'combined' } = process.env;
const app = express();

app.use(helmet());
app.use(cors());
app.use(morgan(MORGAN_FORMAT));
app.use(compression());
app.use(bodyParser.json({ limit: '16mb' }));
app.use('/files', filesRoutes);
app.use('/', versionRoutes);
app.use(celebrateErrors());
app.use(errorsHandler);

export default app;
