export const ibv = {
  client: 'mysql',
  connection: {
    user: 'user',
    password: 'Q!W@E#R$',
    connectString: '192.168.0.179/IBV',
  },
  acquireConnectionTimeout: 300000,
  wrapIdentifier: (value, _origImpl, _queryContext) => value,

};
