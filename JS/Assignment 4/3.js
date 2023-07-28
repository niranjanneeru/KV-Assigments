function createSequentialIdGenerator(baseValue) {
    var i = 0;
    return ()=>{
        i += 1;
        return baseValue + i;
    }
  }
  
  const generateUniqueId = createSequentialIdGenerator(999);
  
  console.log(generateUniqueId()); // Expected output: 1000
  console.log(generateUniqueId()); // Expected output: 1001
  console.log(generateUniqueId()); // Expected output: 1002