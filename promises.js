var isMomHappy = true;


var WillGetPhone = new Promise(
	function(resolve, reject){
		if(isMomHappy){
			var phone = {
				brand :'Apple',
				color: 'Onyx-Blc'
			};
			resolve(phone); // fullfiled
		} else {
			var reason = new Error ('Mom is not happy');
			reject(reason)
		}

	})

var showOff = function(phone){
	return new Promise(
		function(resolve, reject){
			var message = 'Hey, Bro, look at my new ' + phone.color + ' ' + phone.brand + ' phone';
			resolve(message);
		});
};

var askMom = function() {
	console.log('Before asking Mom') //Log before
	WillGetPhone
	.then(showOff)
	.then(function(fulfilled){
			console.log(fulfilled);
			// Output : {brand : 'sdadsa', color: 'dada'}
		})
		.catch(function(error){
			console.log(error.message)
		});

	console.log('After asing mom') // log after
};

askMom();

