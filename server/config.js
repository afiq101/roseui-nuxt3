const config = {
    db: {
        /* don't expose password or any sensitive info, done only for demo */
        host: "awqaf.cpbz3vblmjyf.ap-southeast-1.rds.amazonaws.com",
        user: "admin",
        password: "Xs2mysql_admin",
        database: "dev_awqaf",
        connectionLimit: 60
    },
        listPerPage: 10,
    };
module.exports = config;