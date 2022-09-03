const wbm = require('./wbm');
const csv = require('csvtojson')
const csvFilePath = process.argv[2]
console.log(csvFilePath)
/* https://www.npmjs.com/package/wbm */
csv()
  .fromFile(csvFilePath)
  .then((contacts) => {
    console.log(contacts)
    wbm.start({ showBrowser: true, qrCodeData: true, session: true })
      .then(async qrCodeData => {
        await wbm.waitQRCode();
        await wbm.send(contacts, process.argv[3]);
        await wbm.end();
      }).catch(err => { console.log(err); });
    
  }).catch(err => { console.log(err); });