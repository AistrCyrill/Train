//Eange
var range = function(x , y, s) {
	var x = x; var y = y; var s = s; var a =[];
	// For positive nums
	if(x < y) {
		while(x <= y) {
		if(s === undefined || s == 0 || s < 0){
			if ( s < 0 ){
				console.log("Please, enter a number more then 0 , for now step will be the 1");
			}
			s = 1;
		}
		a.push(x);
		x = x + s;
	}
	console.log(a);
	return a;
} else {
	while ( x >= y) {
		 if (s === undefined || s == -0 || s > 0 ){
		 	if(s > 0){
		 		console.log("Please, enter a number less then 0 , for now step will be the 1");
		 	}
			s = -1;
		}
		a.push(x);
		x= x + s;
	}
	console.log(a);
	return a;
}

}
// Summa
var  sum = function(array) {
	var array = array;
	var a = array.length;
	var x = array[0];
	for( i = 1; i< a; i++){
			x = x + array[i];
			
	}
	console.log(x);	
}

range(0,  200	, 100 );
sum(range(1, 10))