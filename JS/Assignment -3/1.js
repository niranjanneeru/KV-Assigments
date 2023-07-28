function print() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Resolved");
        },2000);
    });
}
print().then(res => console.log(res))