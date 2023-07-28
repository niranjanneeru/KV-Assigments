function swapKeyAndValues(obj) {
    keys = []
    for(key in obj){
        keys.push(key);
    }
    keys.forEach(element => {
        obj[obj[element]] = element;
        delete obj[element];
    });
}
  
  const sampleObject = {
    key1: 'value1',
    key2: 'value2',
    key3: 'value3'
  };
  
  swapKeyAndValues(sampleObject);
  console.log(sampleObject);
  
//   // Expected output:
//   {
//     value1: 'key1',
//     value2: 'key2',
//     value3: 'key3'
//   }