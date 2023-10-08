import { Router } from 'express';
import { getUserData } from '../controllers/userController.js';


const userRoutes = new Router();

userRoutes.get('/', getUserData);


export default userRoutes;
