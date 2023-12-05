const fs = require('fs');

let stored = [];
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

//Silly search function, only iterates the length of the match.
function matcher(info, match){
    if (match.length === 0 ){
	return true;
    }else if (info.length === 0) {
	return false;
    }else if(info[0] === match[0]){
	return matcher(info.slice(1), match.slice(1))
    }else {
	return false;
    }   
}

fs.readFile('data', 'utf8', (err, data) => {
    if (err) {throw err}

    stored = data.replaceAll(/\s/g,'-').split('-');
    
    let newArray = new Array(stored.length).fill('');

    for (let f = 0; f < stored.length; f++){

	//Iterates through the element, moving discovered digits sequentialy to a new array.
	for(let a = 0; a < stored[f].length; a ++){
	    
	    if (/\d/.test(stored[f][a])){
		newArray[f] += stored[f][a];
	    }

	    // Each iteration atches against all the objects keys.
	    for(key in info){

		if(matcher(stored[f].slice(a), key)){
		    newArray[f] += info[key];
		}	    
	    }	  
	}
	
	let temp;

	if(newArray[f].length > 1) {
	    temp = newArray[f]
	
	    newArray[f]  =  +temp.slice(0, 1)*10 + +temp.slice(-1);

	    total += +newArray[f];
	}
	else {
	    temp = newArray[f]

	    newArray[f] =  +temp.slice(0, 1)*10 + +temp.slice(0, 1)
	    
	    total += +newArray[f]
	}	    
    }
   console.log(total)
})

//https://adventofcode.com/2023/day/1
