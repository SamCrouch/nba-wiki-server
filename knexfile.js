// Update with your config settings.

const connectionString = 'postgres://urtyetkjmnxoxb:7f9ef658bffdc7941bf5c46b7909ed2641a41541f888e89baa68ce034dd0e932@ec2-52-86-25-51.compute-1.amazonaws.com:5432/d601e5a7lh2059'


module.exports = {

  development: {
    client: 'pg',
    connection: {
      connectionString,
      ssl: {
        rejectUnauthorized: false,
      },
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
