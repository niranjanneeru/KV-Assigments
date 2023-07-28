function getDataFromServer() {
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { id: 1, name: 'John Doe' };
            resolve(data);
        }, 1000);
    });
}

getDataFromServer().then((value) => {
    console.log(value);
});

