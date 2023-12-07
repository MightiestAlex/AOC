const fs = require('fs');

let games = [];
class values {
    constructor (
	green = 0,
	red = 0,
	blue = 0
    )
    {
	this.green = green;
	this.red = red;
	this.blue = blue;
    }
};

let gameValues = new values(13, 12, 14);
let tempTotal = 0;

fs.readFile('fkdata', 'utf8', (error, data) => {
    if (error) {throw error};

    games = data.split('Game ')
    games.shift()
    
    games.forEach((element, idx, array) => {

	array[idx] = element.replaceAll(/\s/g, '').replaceAll(/[;]/g, 'x<x').split(/[:,x]/)
	//console.log(array[idx])
    })

    for (ele in games){

	let tempAll = new values()
	
	tempTotal += parseInt(games[ele][0]);
	
	for (let a = 1; a < games[ele].length - 1; a++){

	    if(games[ele][a].match(/\d+/g)){

		//matches value from array
		let tempVal = parseInt(games[ele][a].match(/\d+/g));
		let tempColor = games[ele][a].replaceAll(/\d/g, '');
		
		if (tempVal > tempAll[tempColor]){
		    tempAll[tempColor] = tempVal;
		}
	    }
	}
	
	let temp = 1;
	for (keys in tempAll){
	    console.log(tempAll[keys]);
	    temp *= parseInt(tempAll[keys])*1;
	}
	
	tempTotal += temp
	    
	console.log(`\n ${tempTotal}, %i, %i\n`, temp, parseInt(games[ele][0]));
	
    }
 
console.log(tempTotal);
})

//game four is fucked, need function to take tempAll object
