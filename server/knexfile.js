'use strict';

module.exports = {
  "development": {
    "client": 'pg',
    "connection": 'postgres://localhost/classifieds_dev'
  },
  "test": {
    "client": 'pg',
    "connection": 'postgres://localhost/classifieds_test',
    "migrations": {
      "directory": "./server/migrations"
    },
    "seeds": {
      "directory": "./server/seeds"
    }
  },

  "production": {
    "client": 'pg',
    "connection": process.env.DATABASE_URL
    // "migrations": {
    //   "directory": "./server/migrations"
    // },
    // "seeds": {
    //   "directory": "./server/seeds"
    // }
  }
};
