const isHappy = n => {
  n = String(n).split('');
  let x = 0;
  while (true) {
    var temp = 0;
    console.log(n)
    for (let i = 0; i < n.length; i++) {
      temp += n[i] * n[i];
    }
    if (temp === 1) return true;
    n = String(temp).split('');
    if (++x === 1000) return false;
  }
}
// console.log(isHappy(20));

const accum = str => {
  return [...str]
    .map((item, index) => item[0].toUpperCase().padEnd(index + 1, item[0].toLowerCase())).join('-');
}

// console.log(accum('RqaEzty'));
const sqrt = x => {
  if (x === 1) return 1;
  if (x <= 5) return parseInt(x / 2);
  for (let i = 2; i < x - 2; i++) {
    if (i * i > x) {
      return i - 1;
    }
    if (i * i === x) {
      return i;
    }
  }
}

// console.log(sqrt(99));

const trailingZeroes = n => {
  function jc(n) {
    if (n === 1) return 1;
    return n * jc(n - 1);
  }
  let res = jc(n);
  console.log(res)
  res = String(res).split(0);
  let x = 0;
  for (let i = res.length - 1; i >= 0; i--) {
    if (res[i] === '') {
      x++;
    } else {
      return x;
    }
  }
}

// console.log(trailingZeroes(18));