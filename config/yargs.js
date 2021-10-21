const argv = require('yargs')
                .option('b', {
                  alias: 'base',
                  type: 'number',
                  demandOption: true,
                  describe: 'Es el base de la tabla de multiplicar'
                })
                .option('l', {
                  alias: 'listar',
                  type: 'boolean',
                  default: false,
                  describe: 'Muestra la tabla en consola'
                })
                .option('h', {
                  alias: 'hasta',
                  type: 'number',
                  demandOption: false,
                  default: 20,
                  describe: 'Hasta base de la tabla de multiplicar'
                })
                .check((argv, options) => {
                  console.log('yargs', argv.h);
                  if (isNaN(argv.b)) {
                    throw 'La base tiene que ser un número';
                  }
                  if (isNaN(argv.h) || argv.h <= 0) {
                    throw 'El número hasta debe ser un número positivo';
                  }
                  return true 
              })
                .argv;

module.exports = argv;
