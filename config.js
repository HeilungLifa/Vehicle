module.exports = {
    db_config: {
        user: 'sa',
        password: 'P@ssw0rd',
        server: 'DESKTOP-GDG6PM0',
        database: 'experiments_VehicleMetrics',
        options: {
            enableArithAbort: true
        }
    },
    host: '192.168.0.14',
    port: 80,
    web_socket: {
        host: '192.168.0.14',
        port: 3000
    },
    
    logger: console.log,

    writeToDatabase: false,
    countWriteToDb: 10,
    isHttps: false,
    collect_statistics: true
};