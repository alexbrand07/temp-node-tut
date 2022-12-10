const { readFileSync, writeFileSync } = require("fs")

console.log("start")

readFileSync("./content/first.txt", "utf8", (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    const first = result
    readFileSync("./content/second.txt", "utf8", (err,result) => {
        if (err) {
            console.log(err)
            return
        }
        const second = result
        writeFileSync("./content/result-async.txt", `Here is the result : ${first}, ${second}`, (err,result)=> {
            if (err) {
                console.log(err)
                return
            }
            console.log("done with that shit")
            }
        )
    })
})
console.log("starting new task")
