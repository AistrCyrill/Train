// var array = [];
// function randArr(min, max, arr, x) {
// 	var arr = [];
// 	var x = x-1;
// 	for(var i = 0; i <= x; i++ ){
// 		arr.push(Math.floor(Math.random()* (max-min)+min));
// 	}
// 	console.log(arr);
// }
// randArr(2, 30, array, 5);

// var arr = ['a' , 'b' , 'c' , 1 , 2 , 4 ,5 ,6];
// console.log(arr);
// Fist Method

// var reverseArray = function(arr) {
// 	var arr = arr;
// 	var last = arr.length;
// 	console.log(last);
// 	var narr = [];
// 	for(var i = 0; i < last ; i++){
// 		var z = arr[i];  
// 		narr.unshift(z);
// 	}
// 	return narr ;
// }

// console.log(reverseArray(arr));
// console.log(arr);

// function reverseArrayInPlace( array ){
// 	var array = array;
// 	var arraySort = [];
// 	for (var i = array.length-1; i >= 0; i--){
// 		arraySort.push(array[i]);
// 	}
// 	array = arraySort;
// 	console.log(array);
// 	return array;
// }
// console.log(reverseArrayInPlace(arr));

var reverseArray = function(array){
	var output = [];
	for ( var i = array.length-1; i >= 0 ; i -- ){
		output.push(array[i]);
	}
		return output;
}

function reverseArrayInPlace(array) {
  for (var i = 0; i < Math.floor(array.length / 2); i++) {
    var old = array[i];
    array[i] = array[array.length - 1 - i];
    console.log(array[i]);
    array[array.length - 1 - i] = old;
    console.log(old);


  }
  return array;
}

 console.log(reverseArray(['a' , 'b' , 'c' , 1 , 2 , 4 ,5 ,6]));

 var arrayValue = ['a' , 'b' , 'c' , 1 , 2 , 4 ,5 ,6];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);