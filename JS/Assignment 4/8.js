function simulateAsyncTask() {
    return new Promise((resolve, reject) => {
      const randomNumber = Math.random();
      setTimeout(() => {
        if (randomNumber < 0.5) {
            resolve('Success');
        } else {
          reject('Error: Task failed');
        }
      }, 500);
    });
  }
  
async function retry(f,t) {
    try{
        return await f();
    }catch(e){
        if(t===1) return e;
        console.log("Retrying");
        return retry(f, t-1);
    }
  }
  
  (async () => retry(simulateAsyncTask, 3)
  .then(result => console.log('Result:', result))
  .catch(error => console.log('Error:', error)))();