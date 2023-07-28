function simulateAsyncTask() {
    return new Promise((resolve, reject) => {
      const randomNumber = Math.random();
      setTimeout(() => {
        if (randomNumber < 0.5) {
            // reject('Error: Task failed');
            resolve('Success');
        } else {
          reject('Error: Task failed');
        }
      }, 500);
    });
  }
  
  function retry(f,t) {
    return f().then((value)=>{
        return new Promise((resolve, reject) => {
            resolve(value);
        })
    }).catch((e)=> {
        if(t === 1) return new Promise((resolve, reject) => {
            reject(e);
        })
        console.log("Retrying...");
        return retry(f,t-1);
    })
  }
  
  // Sample invocation
  retry(simulateAsyncTask, 3)
  .then(result => console.log('Result:', result))
  .catch(error => console.log('Error:', error));