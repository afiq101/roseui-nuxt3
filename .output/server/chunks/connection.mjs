import * as promise from 'mysql2/promise';

function getDefaultExportFromNamespaceIfNotNamed (n) {
	return n && Object.prototype.hasOwnProperty.call(n, 'default') && Object.keys(n).length === 1 ? n['default'] : n;
}

const require$$0 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(promise);

const config$1 = {
  db: {
    host: "awqaf.cpbz3vblmjyf.ap-southeast-1.rds.amazonaws.com",
    user: "admin",
    password: "Xs2mysql_admin",
    database: "dev_awqaf",
    connectionLimit: 60
  },
  listPerPage: 10
};
var config_1 = config$1;

const mysql = require$$0;
const config = config_1;
async function query(sql, params) {
  const connection = await mysql.createPool(config.db);
  const [results] = await connection.execute(sql, params);
  await connection.execute("CALL kill_all_sleep_connections()");
  connection.end();
  return results;
}
async function destroy() {
  const connection = (await mysql.createConnection(config.db)).destroy();
  return connection;
}
var connection = {
  query,
  destroy
};

export { connection as c };
//# sourceMappingURL=connection.mjs.map
