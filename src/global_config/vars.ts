
export const vars = {
  port: process.env.PORT || 3008,
  dbHost: process.env.DB_HOST || '127.0.0.1',
  dbUserName: process.env.DB_USERNAME || 'postgres',
  dbPassword: process.env.DB_PASSWORD || 'fleco1308',
  dbPort: Number(process.env.DB_PORT) || 5432,
  dbSync: process.env.DB_SYNC == 'true',
  dbName: process.env.DB_SERVICE || 'itasoft',
  dbSslModeRequire: process.env.DB_SSL_MODE_REQUIRE == 'true',
  dbDialect: process.env.DB_DIALECT || 'postgres',
  dbMaxPoolSize: Number(process.env.MAX_DB_POOL_SIZE) || 30,
  dbPoolAcquireTimeout: Number(process.env.DB_ACQUIRE_TIMEOUT) || 60000,
  dbPoolIdleConnectionTime: Number(process.env.DB_POOL_IDLE_CONNECTION_TIME) || 30000,
  dbLogging: process.env.DB_LOGGING === 'true',
  JWT_SECRET: 'secretettet'
};