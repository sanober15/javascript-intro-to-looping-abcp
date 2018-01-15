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
    --n;
  }
  return "done";
}

function doWhileLoop(array){
do {
  array.pop();
  return array;
} while (maybeTrue()|| array.length >=1);
}
