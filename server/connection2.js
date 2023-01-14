const mysql     = require('mysql2/promise');
const config    = require('./config2');

async function query2(sql, params) {
    
    const connection = await mysql.createPool(config.db);
    const [results, ] = await connection.execute(sql, params);

    //await connection.execute('CALL kill_all_sleep_connections()');
    connection.end();

    return results;
}

async function destroy2() {
    const connection = (await mysql.createConnection(config.db)).destroy();
    return connection;
}

module.exports = {
    query2,
    destroy2
}