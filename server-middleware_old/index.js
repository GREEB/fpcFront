/* eslint-disable no-unused-vars */
import dotenv from 'dotenv';
dotenv.config();
/* eslint no-process-env:0 */

import getInitInfo from './modules/mongo.js';
import udpServer from './modules/udpServer.js'; // Create UDP Server
import { httpServer } from './modules/expresssocket.js'; // Create Express and Socket server

// Get initial Info
getInitInfo();
module.exports = { path: '/', handler: httpServer }
