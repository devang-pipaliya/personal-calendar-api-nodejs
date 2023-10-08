import { Router } from 'express';
import debug from 'debug';
import { testAuth } from '../helper/extraHelper.js';
import userRoutes from './userRoutes.js';

const log = debug('app:apiRoutes -> ');

const apiRoutes = new Router();

apiRoutes.get('/v1/test', testAuth);

apiRoutes.use('/user', userRoutes);

export default apiRoutes;
