var x = {
	type: 1,
	boy : false,
	girls: "Nansy"

};
var y = {
	type: 1,
	boy : false,
	girls: "Nansy"
};
var z = {
	type: 12,
	boy : true,
	girls: "Nansy"

};


var deepEqual = function (a,  b){
	if ( a === b ) return true;

	if ( a == null || typeof a != "object" ||
		b == null || typeof b != "object") return false;

	var propInA = 0, propInB = 0;

	for ( var props in a ){
		propInA += 1;
	}

	for (var prop in b ){
		propInB +=1 ;
			if(!(propInA) || !deepEqual (a[prop] , b[prop])) return false;
	}

	return propInA == propInB;
}


console.log(deepEqual(x, y));
