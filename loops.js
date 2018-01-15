function forLoop(array){
  for (var i = 0; i < 25; i++) {
    var s = `I am ${i} strange loop.`;
    array.push(s);
  }
  return array;
  }

function whileLoop(n){
  while (n >= 0) {
    console.log(n);
    return --n;
  }
}

function doWhileLoop(array){

}
