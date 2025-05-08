const { Pool } = require("pg");

const pool = new Pool({
  connectionString: "postgresql://raze:raze@localhost:5432/auth",
});

module.exports = pool;
