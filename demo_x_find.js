const mysqlx = require('mysqlx');

mysqlx.getSession({
    host: 'localhost',
    dbUser: 'demo_user',
    dbPassword: 'password'
}).then(session => {
    const collection = session.getSchema('NEW57').getCollection('Innovation_Day');
    return Promise.all([
        collection.find("$.language == 'JP'").limit(3).execute(doc => console.log(doc)),
        session.close()
    ]);
}).catch(err => {
    console.log(err);
});
