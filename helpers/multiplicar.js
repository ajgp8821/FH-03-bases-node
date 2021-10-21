const fs = require('fs');
const colors = require('colors');

const createFile = async(base, listar, hasta) => {
  try {
    let exit, consol= '';
    
    for( let i = 1; i <= hasta ; i++){
      exit +=`${base} x ${i} = ${base*i}\n`;
      consol +=`${colors.red(base)} ${'x'.yellow} ${colors.blue(i)} ${'='.magenta} ${colors.green(base*i)}\n`;
    }

    if(listar){
      console.log('======================'.cyan);
      console.log(`   Tabla del: ${colors.red(base)}`.cyan);
      console.log('======================'.cyan);
      console.log(consol);
    }

    fs.writeFileSync(`./salida/tabla-${base}.txt`, exit)
    return `tabla-${base}`;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  createFile
}

