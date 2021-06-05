const knex = require('knex');
const { ibv } = require('../../knexfile');

export const connectionIBV = knex(ibv);
//