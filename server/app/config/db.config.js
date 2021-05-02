module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "Password",
  DB: "gym_database",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
