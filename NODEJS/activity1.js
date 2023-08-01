const fs = require('fs');

function sync_read(){
    return fs.readFileSync('activity1.js', 'utf-8');
}

function async_read(){
    fs.readFile('activity1.js', {encoding:'utf-8'}, (err, data) => {
            if(err) return;
            console.log(data);
    });
}

function async_write(data){
    fs.writeFile('test.txt', data , err => {
        if(err) console.log("Error");
        console.log("Write");
    });
    fs.writeFileSync('test.txt', data);
}

function append_write(data){
    fs.appendFile('test.txt', data, err => {
        if(err) console.log(err);
        console.log("Append");
    })
    fs.appendFileSync('test.txt', data);
}

console.log(sync_read());
async_read();
async_write("Test");
append_write("Test!");