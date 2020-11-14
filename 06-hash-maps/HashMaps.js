class HashMap {
  constructor(size = 0) {
    this.hashmap = new Array(size)
      .fill(null);
  }

  hash(key) {
    let hashCode = 0
    for (let i = 0; i < key.length; i++) {
      hashCode += hashCode + key.charCodeAt(i);
    }
    hashCode = hashCode % this.hashmap.length;
    return hashCode;
  }

}

const myHashMap = new HashMap(3);
console.log(myHashMap.hash('id'));
console.log(myHashMap.hash('id'));
module.exports = HashMap;