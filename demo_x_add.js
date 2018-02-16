const mysqlx = require('mysqlx');
 
mysqlx.getSession({
    host: 'localhost',
    dbUser: 'demo_user',
    dbPassword: 'password'
}).then(session => {
    const collection = session.getSchema('NEW57').getCollection('Innovation_Day');
    return Promise.all([
        /*** collection.add({ foo: "bar" }).add({ baz: "bup" }).execute(),***/
        collection.add({"uid": 1, "product": "スマホアプリA", "price": 10000, "language":"JP"}).execute(),
        collection.add({"uid": 2, "product": "スマホアプリB", "price": 5000, "language":"JP"}).execute(),
        collection.add({"uid": 3, "product": "スマホアプリC", "price": 3000, "language":"JP"}).execute(),
        collection.add({"uid": 1, "product": "スマホアプリD", "price": 2000, "language":"EN"}).execute(),
        collection.add({"uid": 1, "product": "スマホアプリE", "price": 1000, "language":"EN"}).execute(),
        session.close()
    ]);
}).catch(err => {
    console.log(err);
});
