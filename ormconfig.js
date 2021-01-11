// /**
//  * 连接本地 mysql， 只用来生成 migration
//  * 只在本地留存
//  */
// module.exports = {
//   type: 'mysql',
//   host: '0.0.0.0',
//   port: 3306,
//   username: 'root',
//   password: 'double',
//   database: 'koa',
//   entities: [`${__dirname}/src/db/model/**/*{.js,.ts}`],
//   migrationsTableName: 'migration_log',
//   migrations: [`src/db/migration/*{.js,.ts}`],
//   cli: {
//     migrationsDir: `src/db/migration`,
//   },
// }
