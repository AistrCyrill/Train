// var forEach = function(array, action) {
// 	for ( var i = 0; i< array.length ; i++)
// 		action(array[i]);
// }
// var numbers = [ 1 , 2 ,3 ,4 ,5 ,6], sum =0;
// forEach(numbers, function(number){
// 	sum += number;
// });



// console.log(sum);

// function gt(n) {
// 	return function(m) {
// 		return m > n ;
// 	}
// }

// var gt10 = gt(10);

// console.log(gt10(11));

// function noisy(f) {
// 	return function(arg) {
// 		console.log ('calliing with', arg);
// 		var val = f(arg);
// 		console.log("called	with",	arg,	"-	got",	val);
// 		return	val;
// 	}
// }
// noisy(Boolean)(0);

// var	landscape	=	function()	{
// 		var	result	=	"";
// 		var	flat	=	function(size)	{
// 				for	(var	count	=	0;	count	<	size;	count++)
// 						result	+=	"_";
// 		};
// 		var	mountain	=	function(size)	{
// 				result	+=	"/";
// 				for	(var	count	=	0;	count	<	size;	count++)
// 						result	+=	"'";
// 				result	+=	"\\";
// 		};
// 		flat(20);
// 		mountain(4);
// 		flat(6);
// 		mountain(1);
// 		flat(8);
// 		mountain(4);
// 		flat(8);
// 		return	result;
// };

// console.log(landscape());

// function unless( test, then ){
// 	if(!test) then();
// }

// function repeat(times, body){
// 	for (var i = 0; i < times; i++) body(i);
// }

// repeat(5 , function(n) {
// 	unless( n % 2, function() {
// 		console.log(n, "is even")
// 	});
// });



// function noisy(f) {
// 	console.log(arguments)
// 	return function(arg) {
// 		console.log ('calliing with', arg);
// 		var val = f(arg);
// 		console.log("called	with",	arg,	"-	got",	val);
// 		return	val;

// 	}

// }
// noisy(Boolean)(1);



// function transWrap(f){
// 	return function() {
// 		return f.apply(null, arguments);
// 	};
// }

var str = JSON.stringify({name : "X" , born : 1990});

console.log(str);

console.log(JSON.parse(str).born);


var http = require('http');

var port = 8081;

var s = http.createServer();
s.on('request', function(request, response) {
    response.writeHead(200);
    console.log(request.method);
    console.log(request.headers);
    console.log(request.url);
    response.write('hi');
    response.end();
});

s.listen(port);
console.log('Browse to http://127.0.0.1:' + port);
