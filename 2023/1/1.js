const fs = require('fs');

let unfiltered = []
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


fs.readFile('fkdata', 'utf8', (err, data) => {
    if (err) {throw err}

    unfiltered = data.replaceAll(/\s/g,'-').split('-');

    for(let i=0; i<unfiltered.length; i++){


	for(key in info){
	    unfiltered[i] = unfiltered[i].replaceAll(key, info[key]);
	}
	
	unfiltered[i] = unfiltered[i].replaceAll(/\D/g, '');
    
	console.log(unfiltered);

	if(unfiltered[i].length < 2) {
	    console.log(unfiltered[i])
	    
	    total += +unfiltered[i].slice(0, 1)*10
	    total += +unfiltered[i].slice(0, 1);
			continue;
	}

	total += +unfiltered[i].slice(0, 1)*10
	total += +unfiltered[i].slice(-1);
	
	    //break;
	
    }

   console.log(total)


})
