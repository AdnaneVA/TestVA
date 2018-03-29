import openSocket from 'socket.io-client';
const  socket = openSocket('http://10.3.141.1:8000');
import Parameter from './Parameter.js';
<Parameter>
  
var x=document.getElementById("main"); 
var y=x.getElementsByTagName("ListItem"); 
// y[0] -> IR sensor,  y[1]-> ComCloud, y[2] -> AWS, y[3] -> Azure 
     
function sendParameter() {
  var paramList={IRSensor:false, ComCloud:false, AWS:false, Azure: false}; 
  paramList.IRSensor = (y[0].checked) ? true:false; 
  paramList.ComCloud = (y[1].checked) ? true:false;
  paramList.AWS = (y[2].checked) ? true:false; 
  paramList.Azure = (y[3].checked) ?  true:false; 
  socket.emit(paramList); 
}
    
  
   
                     
      
  
