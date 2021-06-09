import { connectionIBV } from '../database/';
const { ibv } = require('../../knexfile');
const knex = require('knex')(ibv);


export async function userLoginService(){
    const user = await connectionIBV('Usuario').select('*')
    return user
}
