import dotenv from 'dotenv';
dotenv.config();
/* eslint no-process-env:0 */
module.exports.default = {

    env: process.env.env,
    url: process.env.url,
    sslPort: process.env.sslPort,
    Port: process.env.port,
    mongoDB: process.env.mongoUrl
    // Grab everything in you .env file here
}