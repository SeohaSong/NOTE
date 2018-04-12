let fs = require("fs")
let N = 4;


setTimeout(() => {
    console.log("")
    let start = Date.now();
    for(let i = 0; i < N; i++){
        fs.readFile("data", () => {
            console.log(Date.now() - start)
        });
    }
})


setTimeout(() => {
    console.log("")
    let start = Date.now();
    for(let i = 0; i < N; i++){
        fs.readFileSync("data");
        console.log(Date.now() - start)
    }
}, 1000)