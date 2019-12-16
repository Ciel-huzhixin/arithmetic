function disemvowel(str) {
  let res = '';
  let arr = ['a', 'o', 'e', 'i', 'u', 'A', 'O', 'E', 'U', 'I'];
  for (let i = 0; i < str.length; i++) {
    if (arr.indexOf(str[i]) === -1) {
      res += str[i];
    } else {
      res += '';
    }
  }
  return res;
}
// console.log(disemvowel('This website is for losers LOL'));

function highAndLow(numberStr) {
  let arr = numberStr.split(' ');
  console.log(arr);
  let mid = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (+arr[i] > +arr[j]) {
        mid = arr[j];
        arr[j] = arr[i];
        arr[i] = mid;
      }
    }
  }
  return arr[arr.length - 1] + '  ' + arr[0];
}
function highAndLow(numbers) {
  numbers = numbers.split(' ').map(Number);
  return Math.max(...numbers) + ' ' + Math.min(...numbers);
}
// console.log(highAndLow('4 5 29 54 4 0 -214 542 -64 1 -3 6 -6'))

function getMiddle(str) {
  return str.length % 2 === 0
    ? str.substr(str.length / 2 - 1, 2)
    : str.substr(parseInt(str.length / 2), 1);
}
function helpZoom(key) {
  let leftArr = key.slice(0, ~~(key.length / 2));
  let rightArr = key.slice(~~(key.length / 2) + 1).reverse();
  let isOk = true;
  leftArr.forEach((item, index) => {
    if (item !== rightArr[index]) {
      isOk = false;
    }
  })
  return isOk ? 'yes' : 'no';
}
// console.log(helpZoom([1, 1, 0, 0, 0, 0, 1, 1, 1]));
const findMiddleSortedArrays = (nums1, nums2) => {
  let mergeArr = nums1.concat(nums2);
  let len = ~~(mergeArr.length / 2);
  if (len % 2 === 0) {
    return (mergeArr[len - 1] + mergeArr[len]) / 2;
  } else {
    return mergeArr[len];
  }
}
// console.log(findMiddleSortedArrays([1, 2], [3, 4]));
const longestPalindrome = (str) => {
  let len = str.length;
  while (len) {
    for (let i = 0; i <= str.length - len; i++) {
      let substr = str.substr(i, len).split('');
      let reverseStr = str.substr(i, len).split('').reverse();
      let isOk = true;
      isOk = substr.every((item, index) => {
        return item === reverseStr[index];
      })
      if (isOk) {
        return substr;
      }
    }
    len--;
  }
}
// console.log(longestPalindrome('adsdadkkk'))
const reverse = (number) => {
  let thenZero = number > 0 ? true : false;
  if (thenZero) {
    let num = number.toString().split('').map(Number);
    return Number(num.reverse().join(''));
  } else {
    let num = number.toString().substr(1, number.toString().length - 1).split('').map(Number);
    let index = 0;
    for (let i = 0; i < num.reverse().length; i++) {
      if (num.reverse()[i] !== 0) {
        index = i;
        break;
      }
    }
    return Number(-num.reverse().slice(index).join(''));
  }
}
// console.log(reverse(-23010));
const isPalindrome = (x) => {
  let reverseX = x.toString().split('').reverse();
  let oriX = x.toString().split('');
  let isOk = oriX.every((item, index) => {
    return item === reverseX[index];
  });
  if (isOk) {
    return true;
  } else {
    return false;
  }
}
// console.log(isPalindrome(101));
const longestCommonPrefix = (strs) => {
  let prefix = '';
  if (strs[0][0] === strs[1][0] || strs[0][0] === strs[2][0] || strs[0][0] === strs[2][0]) {
    prefix = strs[0][0];
    return prefix;
  }
  return new Error('there is not the same prefix');
}
// console.log(longestCommonPrefix(['slowers', 'aly', 'alight']));
const threeSum = (nums) => {
  let threeArr = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[i] + nums[j] + nums[k] === 0) {
          threeArr.length ?
            threeArr.forEach(item => {
              let isOk = true;
              let sortArr = item.sort((a, b) => a - b);
              let newArr = [nums[i], nums[j], nums[k]].sort((a, b) => a - b);
              console.log(newArr, sortArr);
              isOk = sortArr.every((item, index) => {
                return item === newArr[index];
              })
              if (!isOk) {
                console.log(1)
                threeArr.push([nums[i], nums[j], nums[k]])
              }
            })
            : threeArr.push([nums[i], nums[j], nums[k]]);

          break;
        }
      }
    }
  }
  return threeArr;
}
// console.log(threeSum([-1, 0, 1, 2, -1, -4]));
const threeSumClosest = (nums, target) => {
  // let resArr = [];
  let sortArr = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        // resArr.push(nums[i] + nums[j] + nums[k] - target);
        sortArr.push(nums[i] + nums[j] + nums[k]);
      }
    }
  }
  sortArr.push(target);
  sortArr.sort((a, b) => a - b);
  let targetIndex = sortArr.indexOf(target);
  console.log(sortArr);
  if (Math.abs(target - sortArr[targetIndex - 1]) > Math.abs(target - sortArr[targetIndex + 1])) {
    return sortArr[targetIndex + 1]
  } else {
    return sortArr[targetIndex - 1];
  }
}
// console.log(threeSumClosest([-1, 2, 1,-4], -2));
const solve = (arr, n) => {
  const s = new Set();
  for (let i = 0; i <= arr.length; i++) {
    for (let j = i + 1; j <= arr.length; j++) {
      const remain = arr.slice(i, j).reduce((x, y) => x + y, 0) % n;
      s.add(remain);
    }
  }
  return s.has(0);
}
// console.log(solve([1, 2, 4], 6));
// console.time('one');
function fibonacci(n) {
  if (n <= 2) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
// console.log(fibonacci(40));
// console.timeEnd('one');
// console.time('two');

function fibonacci(n) {
  let [a, b] = [0, 1];
  for (let i = 0; i < n; i++) {
    [a, b] = [b, a + b];
  }
  return b;
}
// console.log(fibonacci(40));
// console.timeEnd('two');

// console.time('three');
function fibonacci(n) {
  return Array(n).fill()
    .reduce(([a, b]) => {
      return [b, a + b];
    }, [0, 1])[1]
}
// console.log(fibonacci(40));
// console.timeEnd('three');
function is_prime(n) {
  if (n <= 1) return false;
  const N = Math.floor(Math.sqrt(n));
  let is_prime = true;
  for (let i = 2; i <= N; i++) {
    if (n % i === 0) {
      is_prime = false;
      break;
    }
  }
  return is_prime ? n : '';
}
const arr = [];
for (let i = 0; i < 10000000; i++) {
  is_prime(i) ? arr.push(i) : '';
}
function* sieve_prime(n) {
  let numbers = Array.from({ length: n - 2 }, (_, i) => i + 2);
  let p = null;
  while (p = numbers.shift()) {
    yield p;
    numbers = numbers.filter(t => t % p !== 0);
  }
}
const it = sieve_prime(1000000000);
// 三种取iterator值的方法
for (let prime of it) {
  console.log(prime);
}
while (!(i = it.next().done)) {
  console.log(it.next());
}
console.log([...it])