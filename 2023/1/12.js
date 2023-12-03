const fs = require('fs');

let stored = [];
let temper;
let total = 0;

const info = {
    'zero' : 0,
    'one' : 1,
    'two' : 2,
    'three' : 3,
    'four' : 4,
    'five' : 5,
    'six' : 6,
    'seven' : 7,
    'eight' : 8,
    'nine' : 9
};

function matcher(info, match){
    if (match.length === 0 ){
	return true;
    }else if (info.length === 0) {
	return false;
    }else if(info[0] === match[0]){
//	console.log( info, match);
	return matcher(info.slice(1), match.slice(1))
    }else {
	return false;
    }   
}

fs.readFile('data', 'utf8', (err, data) => {
    if (err) {throw err}

    stored = data.replaceAll(/\s/g,'-').split('-');

    for (let f = 0; f < stored.length; f++){
    
	for(let a = 0; a < stored[f].length; a ++){

	    for(key in info){

		if(matcher(stored[f].slice(a), key))
		{
		    stored[f] = stored[f].replace(key, info[key]);
		}	    
	    }	  
	}
	
	stored[f] = stored[f].replaceAll(/\D/g, '');
	
	
	  
/*	if(stored[f].length = 1) {

	    temper = stored[f]

	    stored[f] =  +temper.slice(0, 1)*10 + +temper.slice(0, 1)
	    total += +stored[f];
	
	   // total += +stored[f].slice(0, 1)*10
	   // total += +stored[f].slice(0, 1);
	    continue;
	    }
	    */

	if(stored[f].length > 1) {
	temper = stored[f]
	
	stored[f]  =  +temper.slice(0, 1)*10 + +temper.slice(-1);

	    total += +stored[f];
	}
	else {
	    	    temper = stored[f]

	    stored[f] =  +temper.slice(0, 1)*10 + +temper.slice(0, 1)
	    total += +stored[f]

	}
	
	    
    }

   console.log(data); 
    console.log(stored);
	
   

   console.log(total)


})
