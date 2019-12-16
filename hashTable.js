// 解决方法1：改造hash函数
class HashTable {
  constructor() {
    this.table = new Array(137);
  }
  simpleHash(data) {//简单的散列函数 除留余数法
    let total = 0;
    for (let i = 0; i < data.length; i++) {
      total += data.charCodeAt(i);
    }
    console.log(data + ' ->total  ' + total);
    return total % this.table.length;
  }
  betterHash(data) {
    const h = 31;
    let total = 0;
    for (let i = 0; i < data.length; i++) {
      total += h * total + data.charCodeAt(i);
    }
    console.log(data + ' ->total  ' + total);
    return total / this.table.length;
  }
  search(data) {
    const pos = this.simpleHash(data);
    return this.table[pos]
  }
  push(data) {  //插入元素
    const pos = this.betterHash(data);
    this.table[pos] = data;
  }
}

// const hashTable = new HashTable();
// hashTable.push('abc');
// hashTable.push('china');
// hashTable.push('bbb');
// hashTable.push('ss');
// hashTable.push('nicah');
// hashTable.push('cba');


//解决方法2：开链法
class HashTable2 {
  constructor() {
    this.table = new Array(137);
  }
  simpleHash(data) {//简单的散列函数 除留余数法
    let total = 0;
    for (let i = 0; i < data.length; i++) {
      total += data.charCodeAt(i);
    }
    console.log(data + ' ->total  ' + total);
    return total % this.table.length;
  }
  openPush(data) {
    const pos = this.simpleHash(data);
    let index = 0;
    if (this.table[pos][index] === undefined) {
      this.table[pos][index++] = data;
    } else {
      while (this.table[pos][index] !== undefined) {
        index++;
      }
      this.table[pos][index] = data;
    }
  }
  showDistro() {  //显示元素
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i].length) {
        console.log(`键值是-> ${i} 值是 ${this.table[i]}`);
      }
    }
  }
  bulidTable() {  //添加二维数组
    for (let i = 0; i < this.table.length; i++) {
      this.table[i] = new Array();
    }
  }
}

// const hashTable = new HashTable2();
// hashTable.bulidTable();
// hashTable.openPush('abc');
// hashTable.openPush('china');
// hashTable.openPush('bbb');
// hashTable.openPush('ss');
// hashTable.openPush('nicah');
// hashTable.openPush('cba');
// hashTable.showDistro();
// 解决方法3：线性探测法（寻址法）
class HashTable3 {
  constructor() {
    this.table = new Array(137);
  }
  simpleHash(data) {//简单的散列函数 除留余数法
    let total = 0;
    for (let i = 0; i < data.length; i++) {
      total += data.charCodeAt(i);
    }
    console.log(data + ' ->total  ' + total);
    return total % this.table.length;
  }
  showDistro() {  //显示元素
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i] !== undefined) {
        console.log(`键值是-> ${i} 值是 ${this.table[i]}`);
      }
    }
  }
  linkPush(data) {
    let pos = this.simpleHash(data);
    if (this.table[pos] === undefined) {
      this.table[pos] = data;
    } else {
      while (this.table[pos] !== undefined) {
        pos++;
      }
      this.table[pos] = data;
    }
  }
}

var ht = new HashTable3()
ht.linkPush('abc')
ht.linkPush('china')
ht.linkPush('bbb')
ht.linkPush('ss')
ht.linkPush('nicah')
ht.linkPush('cba')
ht.linkPush('cba')
ht.showDistro()