module.exports = {
  env: 'development',

  database: {
    connection: '',
    transactions: true,
  },

  email: {
    from: "shaggy@nubble.ru",
    host: "smtp.yandex.com",
    port: 465,
    secure: true,
    auth: {
      user: "shaggy@nubble.ru",
      pass: ""
    }
  },

  graphiql: 'true',

  clientUrl:
      'https://shaggy-crm.web.app',

  defaultUser: 'shaggy@nubble.ru',
};
