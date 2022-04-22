
   
// current time at this point
var start = new Date();
setTimeout(function () {
  // the current time at this point (when we actually run the setTimeout)
  var end = new Date();
  // difference in milliseconds between start and end
  console.log('Time elapsed:', end - start, 'ms');
}, 500);

// new Date the running time as we go
while (new Date() - start <= 1000) {
  // this is looping "a mile a minute".
}
console.log('end of file');
