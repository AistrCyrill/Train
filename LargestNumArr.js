function largestOfFour(arr) {
  // You can do this!
  // return arr.length;

  var nArr = arr.length-1;
  var arrOfMax = [];
  var max = 0;

  for( var i = 0; i <= nArr; i++ ){
  	var currentArr = arr[i];
  	var currentArrLength = currentArr.length;
  	var currentArrMax = 0;

			  	for (var x = 0; x <= currentArrLength; x++) {
			  		if (currentArr[x] >= currentArrMax){
			  			currentArrMax = currentArr[x];
			  		} else { continue };
			  	}
	arrOfMax.push(currentArrMax);
  	console.log(currentArrLength + " " +  currentArrMax);



}
  	console.log(arrOfMax);
}



console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]))