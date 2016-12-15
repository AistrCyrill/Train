// function forEach(array, action) {
// 	for( var i = 0; i < array.length; i++) 
// 		action(array[i]);
// }
// forEach([1, 2, 3 ,4, 5], console.log);



// var numbers = [1 , 2 ,3 , 4 ,5 ,12], sum = 0;


// forEach(numbers, function(number){
// 	sum += number;
// });
// console.log(sum);

// var numbers = [1 , 2 ,3 , 4 ,5 ,12];
// console.log(numbers.forEach(console.log));

// function greaterThan(n) {
// 	return function(m) {return m > n };
// }
// var greaterThan10 = greaterThan10(10)


// function findLongestWord(str) {
//   var arrayOW =  str.split(' ');
//   var arrayLength = arrayOW.length-1;
//   var max = arrayOW[0];
// for(var i = 0; i <= arrayLength; i++) {
// 	console.log(arrayOW[i]);
// 		if (arrayOW[i].length > max.length ){
// 			var max = arrayOW[i];
// 	} else continue;
// }
// 	return(max.length);
// }

// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
// console.log(findLongestWord("May the force be with you"));
// console.log(findLongestWord("What if we try a super-long word such as otorhinolaryngology"));


// function titleCase(str) {
//   var w = str.split(' ');
//   var l = w.length;
//   titlecase = [];
//   for(var i =0; i < l ; i ++){
//   	var smallaArr = w[i].split('');
  	
//   	firstL = smallaArr[0].toUpperCase();
//   	restOf =  smallaArr.slice(1).join('');
//   	var lowerRestOf = restOf.toLowerCase();
//   	titlecase.push(smallaArr[0].toUpperCase() + lowerRestOf);
// 	var titlecaseWords = titlecase.join(' ');
//   }
//   return titlecaseWords;
// }

// console.log(titleCase("I'm a little tea pot"));



// function truncateString(str, num) {
//   var string = str;
//   var num = num;

//   if(str.length == num || str.length < num) {
//     return str;
//   } else {
//     if(str.length > 3) {
//       if(num > 3){return str.slice(0, num-3)+"...";
//     } else return str.slice(0, num) +"...";
      
//     }else {
//       return str.slice(0 , num) + "...";
//     }
//   }
// }
// console.log(truncateString("Absolutely Longer", 2


// function chunkArrayInGroups(arr, size) {
//   // Break it up.
//   var arr = arr;
//   var size = size;
//   var length = arr.length;
//   var endArr = [];

//   for( var i = 0; i < length; i) {
//       var s = arr.slice(i, i+size);
//       endArr.push(s);
//       i +=  size;

//   }

//       return(endArr);

// }

// chunkArrayInGroups(["a", "b", "c", "d", 'e', 'm', 'f'], 2);



// function slasher(arr, howMany) {
  
//   var arr = arr;
//   var ind = howMany;
//   var sliced = arr.slice(ind);
//   console.log(sliced);

// }    

// slasher([1, 2, 3], 3);

// function mutation(arr) {
//   	var str1 = arr[0].toLowerCase();
// 	var str2 = arr[1].toLowerCase();
//     var reversedStr = str2.split('').reverse();
// 	var flag = true;

// 	while( flag == true  ) {
// 		for( var i = 0; i < reversedStr.length; i++ ){
// 			var z = reversedStr[i];
// 			if( str1.indexOf(z) != (-1) ) {
// 				continue;
// 			} else flag = false;
// 		}

// 	return flag;
//    };
// }

// console.log(mutation(["Mary", "Army"]));
// console.log(mutation(["Hello", "hey"]));


// function bouncer(arr) {
// 	var arr = arr;
// 	var filtered = arr.filter(Boolean);
// 	console.log(filtered);
// 	return filtered;

// }
// bouncer([false, null, 0, NaN, undefined, ""])
// bouncer([7, "ate", "", false, 9]);
// bouncer(["a", "b", "c"])
// bouncer([7, "ate", "", false, 9])
