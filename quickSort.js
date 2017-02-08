// 快速排序

function swap(arr, index1, index2) {
  let data = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = data;
}

function partition(arr, start, end) {
  let keyIndex = end,
    key = arr[end];
  let i = start - 1,
    j = start;
  for (; j < end; j++) {
    if (arr[j] < key) {
      // i位置的值永远比key值小
      i++;
      if (i != j) {
        swap(arr, i, j);
      }
    }
  }
  ++i;
  swap(arr, i, end);

  return i; //返回key值最终的位置
}

function partition2(arr, start, end) {
  let keyIndex = end,
    key = arr[keyIndex]; //将随机值(以后称key值)定为最后一个数，也可以真的随机选取，见下一行
  // let keyIndex = Math.floor(Math.random() * (end - start)) + start;

  let i = start,
    j = end,
    order = true;
  //当order为true时正向筛选，当order为false时逆向筛选
  //先从正向开始，因为我们把key值保存到了数组的结尾处。
  while (i != j) {
    if (order) {
      //正向筛选
      if (arr[i] > key) {
        swap(arr, i, j); //将大于key的数字和key进行交换
        order = false;
      } else {
        i++;
      }

    } else {
      //逆向筛选
      if (arr[j] < key) {
        swap(arr, i, j); //将小于key的数字和key进行交换
        order = true;
      } else {
        j--;
      }
    }
  }
  return i; //返回key值最终的位置
}

function quickSort(arr, start, end) {
  if (start == end) return;

  let index = partition2(arr, start, end);
  if (index > start) {
    quickSort(arr, start, index - 1);
  }
  if (index < end) {
    quickSort(arr, index + 1, end);
  }
}

let arrNew = [1, 34, 234, 31, 0, 21, 7, 0];
quickSort(arrNew, 0, arrNew.length - 1);
console.log(arrNew);
