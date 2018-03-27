import openSocket from 'socket.io-client';
const  socket = openSocket('http://10.3.141.1:8000');
import Parameter from './Parameter.js';
//xxx ???  
function sendParameter(object) {
  socket.emit(object)
}; 


