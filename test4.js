var x = {
	type: 'object1',
	number : 1,
	something : ['Nice' , 'Happiness'],
	somethingElse : [1, 2 ,3 ],
}

var z = {
	type: 'object1',
	number : 1,
	something : ['Nice' , 'Happiness'],
	somethingElse : [1, 2 ,3 ],
}

var l = 1;

var deepEqual = function(a, b) {
	if (a === b ) return true;

	if (a == null || typeof a != "object" ||
		b == null || typeof b != "object")
		return false;

	var propsInA = 0, propsInB = 0;

	for ( var prop in a){
		propsInA += 1;
		console.log(propsInA);
		}

	for ( var prop in b) {
		propsInB += 1;
		if(!(prop in a ) || !deepEqual (a[prop], b[prop]))
			return false;
		}
		return propsInA == propsInB;
	}

console.log(deepEqual(1, 1));