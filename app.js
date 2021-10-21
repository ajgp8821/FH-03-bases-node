const { createFile } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

console.log(argv);

let base = argv.b;
let listar = argv.l;
let hasta = argv.h;

createFile(base, listar, hasta)
  .then( msg => console.log('se creo', msg))
  .catch(err => console.log(err));



// console.log(process.argv);
// console.log(argv);
// console.log('base: yargs', argv.base);


// const [, , arg3 = 'base=5'] = process.argv;
// const[, base = 5] = arg3.split('=');
// console.log(base);


