const base = {
  type: 'postgres',
  url: process.env.DATABASE_URL,
  schema: 'public',
  synchronize: false,
  logging: false,
  entities: ['src/database/entity/*.ts'],
  migrations: ['src/database/migration/*.ts'],
  subscribers: ['src/database/subscriber/*.ts'],
  cli: {
    entitiesDir: 'src/database/entity',
    migrationsDir: 'src/database/migration',
    subscribersDir: 'src/database/subscriber'
  },
  migrationsRun: true
};

const config = {
  test: {
    url: process.env.CI ? CI_DATABASE_URL : process.env.DATABASE_TEST_URL,
    dropSchema: true
  },
  development: {},
  production: {
    dropSchema: false
  }
};

module.exports = process.env.CI
  ? { ...base, ...config['test'] }
  : { ...base, ...config[process.env.NODE_ENV || 'development'] };
