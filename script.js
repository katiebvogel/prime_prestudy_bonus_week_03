var x = 2;

function timesThreePlus1(a) {
  var result = 3*x + 1;
  return result;
}
var y = timesThreePlus1(x);

function doubleIt(a) {
  var result = y + y;
  return result;
}
var z = doubleIt(timesThreePlus1(x));

function modFive(a) {
  var result = z % 5;
  return result;
}

modFive(doubleIt(timesThreePlus1(x)));
