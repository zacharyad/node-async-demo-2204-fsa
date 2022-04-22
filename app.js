console.log("Hey its module time!")
const chalk = require('chalk')

console.log(chalk.blue('Hello') + ' World' + chalk.red('!'))

// Let's look at some of the global variables in node.js
const {a, afunc, b} = require('./modules/module-a')


// console.log(afunc())
// console.log(a)
// console.log(b)