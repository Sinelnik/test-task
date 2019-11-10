function getMostFrequentElement(str) {
    const arr = str.replace(/\s/g, '').split('');
    arr.forEach(function(item, index) {
        return arr[index] = item.toLowerCase();
    });
    
    let def = 1;
    let count = 0;
    let item;

    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
          if (arr[i] == arr[j]) count++;
          if (def < count) {
            def = count;
            item = arr[i];
          }
        }
        count = 0;
      }
      
      console.log(item + '(' + def + 'repeat)');
}

getMostFrequentElement ('f,Z/bAxnu   67w5"A"467q yrZ.hty890 78tklk/.nm bsswew67');