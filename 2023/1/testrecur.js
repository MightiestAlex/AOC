const i = {
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

let data =['two', 'eightwothree', 'abcone2threexyz'];


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

//console.log(matcher('gremlin', 'gremlin', 0));


for (let f = 0; f < data.length; f++){
    
    for(let a = 0; a < data[f].length; a ++){

	for(key in i){

	    if(matcher(data[f].slice(a), key))
	    {
		data[f] = data[f].replace(key, i[key]);
	    }	    
	}
    }
}

		console.log(data)
   
//};

