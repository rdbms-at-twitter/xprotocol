# xprotocol
Sample Scripts for Evaluating MySQL X Protocol

You can use MySQL as JSON Document Database.

1) Please Install x protocol before using scripts.
[mysql]> INSTALL PLUGIN mysqlx SONAME 'mysqlx.so';

Setting Up MySQL as a Document Store
https://dev.mysql.com/doc/refman/5.7/en/document-store-setting-up.html

2) For evaluate node.js, please also install connector for node.js.

MySQL Connector/Node.js with X DevAPI
https://dev.mysql.com/doc/dev/connector-nodejs/8.0/



【 Sample Output 】

1) No Data
# node demo_x_find.js 

2) Add Data
# node demo_x_add.js 

3) Confirm Data
# node demo_x_find.js 

{ _id: '0eeb6274-0327-e10e-edde-e329d05e', uid: 3, price: 3000, product: 'スマホアプリC', language: 'JP' }

{ _id: '4d6c48e8-c021-4f8f-d4bf-dcbca5c5', uid: 2, price: 5000, product: 'スマホアプリB', language: 'JP' }

{ _id: 'dc183f31-6b6c-1198-0ac5-84c176e4', uid: 1, price: 10000, product: 'スマホアプリA',language: 'JP' }
