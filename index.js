var katzDeliLine = [];


function nowServing (katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
  var firstInLine = katzDeliLine.shift();
 return "Currently serving "+firstInLine+".";
  }
}


function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  } else {
    var counter = [];
    for (var i = 0; i < katzDeliLine.length; i++) {
      counter.push(" "+[i+1]+". "+ katzDeliLine[i]);
    }
     return "The line is currently:"+counter;
  }
}


