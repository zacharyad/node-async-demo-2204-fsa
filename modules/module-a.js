let a = "A var"
let b = "b var"

let {something} = require('./module-b')

console.log("When is this run?")

module.exports = {
    a,
    b,
    something,
    afunc: () => {
        return "A new func"
    }
}



