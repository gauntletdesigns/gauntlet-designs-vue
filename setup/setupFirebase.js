let conf = JSON.parse(process.env.FIREBASE_CONFIG);
console.log(conf);

const fs = require('fs');
fs.writeFile('./.firebase.conf.json', JSON.stringify(conf), 'utf8', () => {
  console.log('wrote ', conf, ' to file');
});
