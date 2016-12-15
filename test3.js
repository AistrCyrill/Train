// // var arr = [2 , 3 , 4, 2];

// // function arrayToList(Arr){	
// // 	var Arr = Arr;
// // 	var arrayLength = Arr.length;
// // 	return { value: Arr.shift(), rest : (arrayLength == 0 ? null : arrayToList(Arr)) };
// // // };

// // console.log(arrayToList(arr));


// // function listToArray(list) {
// // 	var arr = [];
// // 	var list = list;
// // 	var count = 0;
// // 	console.log(typeof list);
// // 	for (key in list ){
// // 		count++;
// // 	}
// // 	console.log("Всего : "+ count);
// // 	var z = 0;
// // 	while(z < count) {
// // 		for(key in list) {
// // 			arr.unshift(list.value);
// // 			listToArray(list);
// // 		}
// // 		z++;
// // 		console.log(arr);
// // 	}
// // }

// // console.log(listToArray(arrayToList(arr)));




function arrayToList(array) {
	var list = null;
	for (var i = array.length - 1; i >=0 ; i --){
		list = { value: array[i], rest : list};
		// console.log(list)
	}
	return list;
};


// function listToArray(list) {
//   var array = [];
//   for (var node = list; node; node = node.rest){
//   	console.log(node);
//   	console.log(node.value);
//     array.push(node.value);
// 	}
//   return array;
// }

var newList = arrayToList(["Hype", "Hustle" ,"Hard" ,"Eat"]);

// // function prepend(el, list) {
// // 	var newList = list; 
// // 	newList = { value : el, rest : list};
// // 	return newList;
// // }
// // prepend	(12, newList);
// // var newList = prepend(12, newList);


// function prepend(value , list){
// 	return { value : value , rest: list};
// }

// console.log(listToArray(prepend(11, newList)));




// NTN 

function ntn(list, number) {
	if (!list) 
		return	undefined;
	else if (number == 0)
		return list.value;
	else
		console.log(list.rest);
		 return ntn(list.rest, number-1);
}

console.log(ntn( newList,  2));
console.log(typeof null);

// Nice work, kir! )

