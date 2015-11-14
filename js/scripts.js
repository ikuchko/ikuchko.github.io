var analizOfNumber = function(number){
  var pingPongNumber = number;
  if (number % 3 === 0 && number % 5 === 0) {
    pingPongNumber = "pingpong";
  } else if (number % 3 === 0) {
      pingPongNumber = "ping";
  } else if (number % 5 === 0) {
    pingPongNumber = "pong";
  };
  return pingPongNumber;
}

var pingPongSequence = function (userNumber) {
  var sequenceOfNumbers = [];
  for (var i = 1; i <= userNumber; i++ ) {
    sequenceOfNumbers.push(analizOfNumber(i));
  }
  return sequenceOfNumbers;
}

$(document).ready(function() {
  $("button#pingpong").click(function() {
    $("#result ul").children("li").remove();
    var pingPongArray = pingPongSequence($("input#userInputNumber").val());
    pingPongArray.forEach(function(pingPongArray){
      $("#result ul").append("<li>"+pingPongArray+"</li>");
    });
  });
});
