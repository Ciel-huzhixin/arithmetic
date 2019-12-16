//判断是否是回文字符串
const plalindrome = str => {
  return str === str.split('').reverse().join('');
}
// console.log(plalindrome('asdas'));


//电话号码的字母组合
const letterCombinations = digits => {
  const phoneNum = [[], [],
  ['a', 'b', 'c'], ['d', 'e', 'f'],
  ['g', 'h', 'i'], ['j', 'k', 'l'],
  ['m', 'n', 'o'], ['p', 'q', 'r', 's'],
  ['t', 'u', 'v'], ['w', 'x', 'y', 'z']
  ]
  digits = digits.split('').map(Number);
  let selectCom = digits.map(t => {
    return phoneNum[t];
  });


}
letterCombinations('23');


const isValid = function (s) {
  if (!s) return true
  var stack = []
  var paris = {
    '(': ')',
    '[': ']',
    '{': '}'
  }
  var key, val, tmp
  for (var i = 0, len = s.length; i < len; i++) {
    key = s[i]
    val = paris[key]
    if (val) {
      stack.push(val) // [')', ']', '}']
    } else {
      tmp = stack.pop()
      console.log(tmp)
      console.log(key)
      if (tmp !== key) return false
    }
  }
  return stack.length === 0
};

// console.log(isValid('{[]}'));