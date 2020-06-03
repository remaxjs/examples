require('dotenv').config()

module.exports = {
  basement: {
    accountName: process.env.ACCOUNT_NAME,
    appId: process.env.APP_ID,
    masterKey: process.env.MASTER_KEY,
  },
};
