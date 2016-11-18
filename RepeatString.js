
function repeatStringNumTimes(str, num) {
  // repeat after me
  var z = [];
  if(num < 0) {
    return ' ';
  } else {
    for ( var i = 0; i <num ; i++ ) {
      z.push(str);
    }
    var repeated = z.join(' ');
    return repeated;
  }
}

console.log(repeatStringNumTimes("abc", 3));
