var analizOfNumber = function(number) {
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
    var pingPongArray = [];
    pingPongArray = pingPongSequence($("input#userInputNumber").val());
    for (i=0; i<=pingPongArray.length-1; i++) {
      $("#result ul").append("<li>"+pingPongArray[i]+"</li>");
    }
  });
});
