// Fibonacci数列

// 输入n，求Fibonacci数列的第n项
function fibonacci(n) {
  if (n < 0) {
    throw new Error('输入的数字不能小于0');
  }
  if (n == 0) {
    return 0;
  } 
  if (n == 1) {
    return 1;
  }
  return fibonacci(n-1) + fibonacci(n-2);
}

// 其实并不是很好的方法 因为比如求fibonacci(10)的时候，分解成了
// fibonacci(9)和fibonacci(8)，但是fibonacci(9)又会分解成
// fibonacci(8)和fibonacci(7)，其中就重复计算了fibonacci(8)，
// 以此类推，重复的计算非常多，最简单的办法就是记录下已经计算过的值

// 使用闭包来公用数组arr
function fibonacci2(n) {
  if (n < 0) throw new Error('输入的数字不能小于0');
  let arr = [0, 1];
  function calc(n) {
    if (n<2) {
      return arr[n];
    }
    if (arr[n] != undefined) {
      return arr[n];
    }
    let data = calc(n-1) + calc(n-2);
    arr[n] = data;
    return data;
  }

  return calc(n);
}

function fibonacciFunc() {
  let arr = [0, 1];
  function calc(n) {
    if (n < 0) throw new Error('输入的数字不能小于0');
    if (n<2) return arr[n];
    if (arr[n] != undefined) {
      return arr[n];
    }
    let data = calc(n-1) + calc(n-2);
    arr[n] = data;
    return data;
  }

  return calc;
}
let fibonacci3 = fibonacciFunc();

// fibonacci3的坏处是只要fibonacci3不被释放, 内存中arr数组会一直存在
// 尤其当计算过比较大的数字后；但是当需要大量的计算fibonacci数时，fibonacci3
// 会比较有优势，但是要记住最后释放fibonacci3，即fibonacci3 = null;
// 还有一种方法就是不用递归，直接循环

function fibonacci4 (n) {
  if (n < 0) throw new Error('输入的数字不能小于0');
  let dataMinusTwo= 0,
    dataMinusOne = 1,
    data;
  if (n == 0) return dataMinusTwo;
  if (n == 1) return dataMinusOne;
  for (var i=2;i<=n;i++) {
    data = dataMinusOne + dataMinusTwo;

    dataMinusTwo = dataMinusOne;
    dataMinusOne = data;
  }
  return data;
}