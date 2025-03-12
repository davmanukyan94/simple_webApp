const { Umzug, SequelizeStorage } = require("umzug");
const { sequelize } = require("./database");

const umzug = new Umzug({
  migrations: {
    glob: ["../migrations/*.js", { cwd: __dirname }],
    resolve: ({ name, path, context }) => {
      const migration = require(path);
      return {
        name,
        up: async () => migration.up(context, sequelize.Sequelize),
        down: async () => migration.down(context, sequelize.Sequelize),
      };
    },
  },
  context: sequelize.getQueryInterface(),
  storage: new SequelizeStorage({ sequelize }),
  logger: console,
});

module.exports = umzug;
