var client = require('firebase-tools');
client.list().then(function (data) {
    console.log(data);
}).catch(function (err) {
    // handle error
});

client.deploy({
    project: 'myfirebase',
    token: process.env.FIREBASE_TOKEN,
    cwd: '/path/to/project/folder'
}).then(function () {
    console.log('Rules have been deployed!')
}).catch(function (err) {
    // handle error
});