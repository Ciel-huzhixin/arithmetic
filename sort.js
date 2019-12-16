let array = Array.from({ length: 1000 }, (_, i) => i); //生成一个1000000升序数组

//乱序
function fisher_yates_shuffle(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    const j = i + Math.floor(Math.random() * (arr.length - i));
    [arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr;
}

function outOfOrder(arr) {
  return arr.sort(() => Math.random() - .5);
}

// array = fisher_yates_shuffle(array);

//=========================================

// 插入排序
function insert_sort(arr) {
  for (let j = 1; j < arr.length; j++) {
    const key = arr[j];
    let i = j - 1
    while (i >= 0 && arr[i] > key) {
      arr[i + 1] = arr[i]
      i--
    }
    arr[i + 1] = key
  }
  return arr
}

// 快速排序
function quickSort(arr) {
  let left = []
  let right = []
  let mid = []
  let key = arr[0]
  if (arr.length < 2) {
    return arr
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < key) {
      left.push(arr[i])
    } else if (arr[i] > key) {
      right.push(arr[i])
    } else {
      mid.push(arr[i])
    }
  }
  return quickSort(left).concat(mid, quickSort(right))
}

// 冒泡排序
function bubbleSort(arr) {
  for (let i = arr.length; i > 0; i--) {
    for (let j = 1; j < i; j++) {
      if (arr[j - 1] < arr[j]) {
        let t = arr[j - 1]
        arr[j - 1] = arr[j]
        arr[j] = t
      }
    }
  }
  return arr
}

// 桶排序
function bucketSort(arr) {
  const length = arr.length
  const resArr = [...Array(length)].map(x => [])
  const indexFunc = value => {
    return value
  }
  arr.forEach(item => {
    return resArr[indexFunc(item)].push(item)
  })
  // return resArr.reduce((result, bucket) => {
  //     return result.concat(bucket)
  // }, [])
  //最推荐写法
  return [].concat(...resArr)
  // return eval(`[${resArr} + '']`)
}

// 归并排序
function mergeSort(arr) {
  if (arr.length < 2) return arr;
  let mid = parseInt(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);
  if (left == 'undefined' && right == 'undefined') return false;
  return merge(mergeSort(left), mergeSort(right));
}
function merge(left, right) {
  let result = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift())
    } else {
      result.push(right.shift())
    }
  }
  left && result.push(left.shift())
  right && result.push(right.shift())
  return result;
}

// 选择排序
function selectSort(arr) {
  const length = arr.length
  let minIndex, temp
  for (let i = 0; i < length - 1; i++) {
    minIndex = i
    for (let j = i + 1; j < length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }
    temp = arr[i]
    arr[i] = arr[minIndex]
    arr[minIndex] = temp
  }
  return arr
}

// 希尔排序
function shellSort(arr) {
  var len = arr.length,
    temp,
    gap = 1;
  while (gap < len / 3) {          // 动态定义间隔序列
    gap = gap * 3 + 1;
  }
  for (gap; gap > 0; gap = Math.floor(gap / 3)) {
    for (var i = gap; i < len; i++) {
      temp = arr[i];
      for (var j = i - gap; j > 0 && arr[j] > temp; j -= gap) {
        arr[j + gap] = arr[j];
      }
      arr[j + gap] = temp;
    }
  }
  return arr;
}
console.time('sort');
array = quickSort(array);
console.timeEnd('sort');
console.log(array)
// 经检测各个排序所需时间为 2.243ms  2100.811ms  10545.765ms  39.035ms   269.502ms  6809.545ms  5.510ms