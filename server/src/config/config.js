module.exports = {
    port:8080,
    db: {
       database: process.env.DB_NAME || 'NodeJSmidterm66Db',
       user: process.env.DB_User || 'root',
       password: process.env.DB_PASS || '',
       options: {
       dialect: process.env.DIALECT || 'sqlite',
       storage: './nodejsmidterm66-db.sqlite'
       },
       }

}