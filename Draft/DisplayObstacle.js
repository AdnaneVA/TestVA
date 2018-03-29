import WavestoneCar from '../DriveController/DriveFunctions/WavestoneCar.js'

var constants = require("./WavestoneCarConstants");
var rpio = require('rpio');
var Gpio = require('pigpio').Gpio;
var mcpadc = require('mcp-spi-adc');
var mpu9250 = require('mpu9250');


//On souhaite afficher une droite positionnée selon l'endroit de l'obstacle 
//Cas obstacle: devant (indice 1 2), à droite (3 4) , à gauche (5 6), devant à droite (7 8), devant à gauche (9 10) 
var pos = { 
x1:???, y1:???, 
x2:???, y2:???, 
x3:???, y3:???,
x4:???, y4:???,
x5:???, y5:???,
x6:???, y6:???,
x7:???, y7:???,
x8:???, y8:???,
x9:???, y9:???,
x10:???, y10:??? 
};

// definir une fonction qui dessine 2 points et le relie 
function draw(p,q,r,s) {    // (p,q,r,s)=(x1,y1,x2,y2) par exemple
  var c = document.getElementById("canvas"); //
  var ctx = c.getContext("2d");
  ctx.beginPath();
  ctx.moveTo(p,q);
  ctx.lineTo(r,s);
  ctx.stroke();
  }
// Affichage conditionné des droites 
<WavestoneCar.prototype>
const DispayObstacle = () => (
if(WavestoneCar.prototype.isFrontObstacle){draw(pos.x1,pos.y1,pos.x2,pos.y2);}
elseif(WavestoneCar.prototype.isRightObstacle){draw(pos.x3,pos.y3,pos.x4,pos.y4);}
elseif(WavestoneCar.prototype.isLeftObstacle){draw(pos.x5,pos.y5,pos.x6,pos.y6);}
elseif(WavestoneCar.prototype.isFrontRightObstacle){draw(pos.x7,pos.y7,pos.x8,pos.y8);}
elseif(WavestoneCar.prototype.isFrontLeftObstacle){draw(pos.x9,pos.y9,pos.x10,pos.y10);}
else{draw(NaN,NaN,NaN,NaN);}
); 


export default DisplayObstacle;



