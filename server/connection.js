const mysql     = require('mysql2/promise');
const config    = require('./config');

async function query(sql, params) {
    
    const connection = await mysql.createPool(config.db);
    const [results, ] = await connection.execute(sql, params);

    //await connection.execute('CALL kill_all_sleep_connections()');
    connection.end();

    return results;
}

async function destroy() {
    const connection = (await mysql.createConnection(config.db)).destroy();
    return connection;
}

module.exports = {
    query,
    destroy
}