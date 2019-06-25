
// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID;

const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {

    if (error) {
        return console.log("connect error: " + error);
    }

    //console.log("Connected : " + client);

    const db = client.db(databaseName);

    // db.collection('users').findOne({ _id: new ObjectID('5d0f22191377941e84331cd9') }, (error, user) => {
    //     if (error) {
    //         console.log('fetch error: ' + error);
    //     }

    //     console.log(user);

    // });

    // db.collection('users').find({ name: 'Adi' }).toArray((error, users) => {
    //     if (error) {
    //         console.log('fech many error:' + error);
    //     }

    //     console.log(users);
    // });

    // db.collection('users').find({ name: 'Adi' }).count((error, count) => {
    //     if (error) {
    //         console.log('fech many error:' + error);
    //     }

    //     console.log(count);
    // });

    // db.collection('tasks').find({completed: true}).toArray((error, tasks) => {
    //     if (error) {
    //         comsole.log('error: ', error);
    //     }

    //     console.log(tasks);
    // });

    // db.collection('users').insertOne({
    //     name: 'Adi',
    //     age: 8
    // }, (error, result) => {
    //     if (error) {
    //         return console.log("insert error: " + error);
    //     }

    //     console.log(result.ops);
    // });

    // db.collection('users').insertMany([
    //     {
    //         name: 'durv',
    //         age: 3
    //     }, {
    //         name: 'amr',
    //         age: 40
    //     }], (error, result) => {
    //         if (error) {
    //             return console.log("insert error: " + error);
    //         }
    //         console.log(result.ops);
    //     });

    // db.collection('tasks').insertMany([
    //     {
    //         description: 'task 1',
    //         completed: true
    //     },
    //     {
    //         description: 'task 2',
    //         completed: false
    //     },
    //     {
    //         description: 'task 3',
    //         completed: true
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log("insert error: " + error);
    //     }
    //     console.log(result.ops);
    // });

    // db.collection('users').updateOne({
    //     _id: new ObjectID('5d0f1c96b8463c124c3fafb7')
    // }, {
    //     // $set: {
    //     //     name: 'pqr'
    //     // }
    //     $inc: {
    //         age: 2
    //     }
    // }).then((result) => {
    //     console.log('updated')
    //     //console.log(result);
    // }).catch((error) => {
    //     console.log('update error: ', error);
    // })

    //     db.collection('tasks').updateMany({
    //         completed: true
    //     }, {
    //             $set: {
    //                 completed: false
    //             }
    //         }).then((result) => {
    //             console.log(result.modifiedCount);
    //         }).catch((error) => {
    //             console.log('error', error);
    //         });


    // db.collection('tasks').deleteOne({
    //     completed: false
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error);
    // });

    // db.collection('users').deleteMany({
    //     name: 'Adi'
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error);
    // });

});
