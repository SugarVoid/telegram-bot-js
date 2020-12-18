
// config.js
const dotenv = require('dotenv');
dotenv.config();
module.exports = {
    endpoint: process.env.API_URL,
    masterKey: process.env.API_KEY,
    teleKey: process.env.BOT_TOKEN,
    port: process.env.PORT
};