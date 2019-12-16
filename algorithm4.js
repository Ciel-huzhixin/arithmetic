const join = (A, B) => {
  const s = new Set(A);
  return B.filter(item => s.has(item))
}

// console.log(join([1, 2, 3, 5], [2, 3, 6, 8, 5]));

const firstRepeat = str =>
  str.split('').map(x => {
    return str.split('').findIndex(x);
  })
// console.log(firstRepeat('hello world'));

const removeElement = (nums, val) => {
  let resArr = [], res = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      resArr.push(nums[i]);
      res++;
    }
  }
  return res;
}
// console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2))

const moveZeroes = nums => {
  let i = 0;
  while (i <= nums.length) {
    if (nums[i] === 0) {
      nums.push(nums.splice(i, 1));
      i--;
    } else {
      i++;
    }
  }
  return nums.flat();
}
// console.log(moveZeroes([0, 1, 0, 3, 12]));
// console.log(moveZeroes([0, 1, 0, 3, 0, 2, 13, 1]));

const firstUniqChar = s => {
  s = s.split('');
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
      return i;
    }
  }
}

// console.log(firstUniqChar('hellohe'));

const isAnagram = (s, t) => {
  s = s.split('');
  if (s.length !== t.length) return false;
  for (let i = 0; i < s.length; i++) {
    if (!s.includes(t[i])) {
      return false;
    }
  }
  return true;
}

console.log(isAnagram('cara', 'raac'));