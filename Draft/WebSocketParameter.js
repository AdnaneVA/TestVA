import openSocket from 'socket.io-client';
const  socket = openSocket('http://10.3.141.1:8000');
import Parameters from './Parameters.js';

function sendParameter() {
  socket.emit('xxx')
}; 


