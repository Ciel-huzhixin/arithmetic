const accum = str => {
  return [...str]
    .map((item, index) => item[0].toUpperCase().padEnd(index + 1, item[0].toLowerCase())).join('-');
}

// console.log(accum('RqaEzty'));

const XO = str => {
  return str.match(/x/ig).length === str.match(/o/ig).length;
}

// console.log(XO('ooosxxx'));

const special = A => {
  let odd = A.filter(item => item % 2);
  let even = A.filter(item => !(item % 2));
  return odd.length > 1 ? even[0] : odd[0];
}

// console.log(special([160, 3, 1719, 19, 11, 13, -21]));

const sum = n => {
  return n * (n + 1) / 2;

}
// console.log(sum(100));

const flat = (args) => {
  return [].concat(...args.map(x => Array.isArray(x) ? flat(x) : x))
}

// console.log(flat([1,2,[3,4,[1,null]]]));

const term_freq = doc => {
  const str = doc.toLowerCase();
  const res = {};
  doc.match(/[a-z]*/g).slice(1).map((t, i) => {
    if (!res[t] && t) {
      res[t] = 1;
    } else {
      res[t]++;
    }
    console.log(res[t]);
  })
  return res;
}
term_freq('');

const maxk = (arr, k) => {
  return arr.sort((a, b) => b - a)[k - 1];
}
// console.log(maxk([1, 2, 3, 5, 8, 2, 100, 23, 7], 3));