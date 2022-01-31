//1から1000までJavaScriptで出力させてください。
//そして３の倍数がFizz,5の倍数がBuZZを出力させてください。

function fizzbuzz() {
  for (i = 1; i <= 1000; i++) {
    if (i % 3 === 0 && i % 5 !== 0) {
      console.log("Fizz");
    } else if (i % 3 !== 0 && i % 5 === 0) {
      console.log("Buzz");
    } else if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else {
      console.log(i);
    }
  }
}
fizzbuzz();
