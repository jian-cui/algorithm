// 输入一个整数数组，将数组排序，使得所有奇数位于数组的前半部分，偶数位于数组的后半部分
function swap(arr, index1, index2) {
  let data = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = data;
}
// 判断奇偶数
function judge(val) {
  if (val & 1) {
    return true; //偶数
  } else {
    return false; // 奇数
  }
}
function sort(arr, func) {

  let index1 = -1, index2 = 0;
  while(index2 < arr.length) {
    if (!func(arr[index2])) {
      // index2位置上是奇数
      index1++;
      if (index1 != index2) {
        swap(arr, index1, index2);
      }
    }
    index2 ++;
  }
  return arr;
}

var arr = [21,4,34,543,6,546,8,634,2,5347,67,78];
console.log(sort(arr, judge));