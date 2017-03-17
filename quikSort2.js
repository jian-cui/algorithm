// 快速排序
function swap (arr, i, j) {
    var val = arr[i];
    arr[i] = arr[j];
    arr[j] = val;
}
function partition(arr, start, end) {
    if (arr.length <= 1) return start;
    var key = arr[start];
    var i = start,
        j = end;
    var order = true; // true 正序; false 反序
    while(i !== j) {
        if (order) {
            if (arr[i] > key) {
                swap(arr, i, j);
            }
            i++;
        } else {
            if (arr[i] < key) {
                swap(arr, i, j);
            }
            j--;
        }
    }
    return arr;
}
function quickSort(arr) {

}