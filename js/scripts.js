var pingPong = function(userNumber){
  var pingPongNumber;
  if (userNumber % 3 === 0 && userNumber % 5 === 0) {
    pingPongNumber = "pingpong";
  } else if (userNumber % 3 === 0) {
      pingPongNumber = "ping";
  } else if (userNumber % 5 === 0) {
    pingPongNumber = "pong";
  } else pingPongNumber = userNumber;
  return pingPongNumber;


}

var sequenceMaker = function (userNumber) {
  var sequenceOfNumbers = [];
  for (var i = 1; i <= userNumber; i++ ) {
    sequenceOfNumbers.push(pingPong(i));
  }
  return sequenceOfNumbers;
}
