import { Request, Response } from 'express';
 
import {userLoginService} from '../services/userService'


export async function userLogin(request: Request, response: Response) {
  try {
    console.log('aqui')
    const response = await userLoginService()
    console.log(response)
  } catch (e) {
    console.log(e.message);
  }
}

