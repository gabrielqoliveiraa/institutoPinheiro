import express from 'express';
import {userLogin} from '../controllers/userController'


const routes = express.Router();


// User
routes.get('/login', userLogin);

export { routes };
