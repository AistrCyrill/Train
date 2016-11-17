
function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  console.log(target.length);
  var l = target.length;
  var x = str.substr(-l);
  if(x == target) {
  	return true;
  } else { return false};  
}

console.log(confirmEnding("Bastian", "an"));
