import throttle from 'lodash.throttle';
import Position from '../models/Position.js'; // Mongo Model
import { users, lastSeen } from './user.js'; // Mongo Model
import { io } from './expresssocket.js';

// FIXME: Fix all of this user session logic, use something real like express-sessions
const addUDPuser = async (ip) => { // FIXME: TYPO
  console.log(`adding user with ip: ${ip}`);
  createUser(ip);
};

const throttledWrite = throttle((x, y, z, surface, flying, ip, size, userID) => {
  // import users
  // match ip with user _id
  // maybe give socket to push from users
  if (users[userID] === undefined) return;
  if ('ip' in users[userID]) {
    if ('socketID' in users[userID]) {
      // console.log(`${ip} also connected with sockets`);

    } else {
      // console.log(`${ip} not connected to sockets`);
    }
  } else {
    // console.log('only socket or something not good');
  }
  lastSeen(users[userID]);
  if (flying === 0) return; // Abort if flying
  if (x === 0 && y === 0 && z === 0) return; // Abort if 000 chord
  const newPos = new Position({
    x,
    y,
    z,
    surface,
    user: users[userID].mongodb_id,
  });
  newPos.save((err) => {
    if (err) console.log('DUPLICATE FIXME'); // TODO: Check duplicates in cache?
  });
  io.to(users[userID].socketID).emit('chord', {
    x, y, z, s: surface,
  });
}, 0);

export { throttledWrite, addUDPuser };
