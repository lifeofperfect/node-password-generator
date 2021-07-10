const program = require(`commander`);
const chalk = require('chalk')
const log = console.log;
const createPassword = require(`./utils/createPassword`)
const clipboardy = require(`clipboardy`);
const savePassword = require(`./utils/savePassword`);

program.version(`1.0.0`).description(`Simple Password Generator`)

// program
//     .command(`generate`)
//     .action(()=> {
//         console.log(`Generate`)
//     })
//     .parse();

// program.option(`-l, --length <number>`, `length of the password`, '8').parse()

program
    .option(`-l, --length <number>`, 'length of the password', '8')
    .option(`-s, --save`, `save password to passwords.txt`)
    .option(`-nn, --no-numbers`, 'remove numbers')
    .option(`-ns, --no-symbols`, `remove symbols`)
    .parse()

//console.log(program.opts())

const {length, save, numbers, symbols} = program.opts()

const generatedPassword = createPassword(length, numbers, symbols)

clipboardy.writeSync(generatedPassword)

if(save){
    savePassword(generatedPassword)
}

log(chalk.blue(`Generated Password: `) + chalk.bold(generatedPassword))
log(chalk.yellow(`Password copied to clipboard`))