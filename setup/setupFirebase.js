let conf = process.env.FIREBASE_CONFIG;

const fs = require('fs');
fs.writeFile('./.firebase.conf.json', JSON.stringify(conf), 'utf8')