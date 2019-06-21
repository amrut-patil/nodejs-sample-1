
const util = require('./utils.js');
const notes = require('./notes.js');
const validator = require('validator');
const chalk = require('chalk');
const yargs = require('yargs');

// console.log(util(4, 5));
// console.log(notes())

// console.log(validator.isEmail("aaa"));
// console.log(validator.isEmail("aaa@pqr.com"));

// console.log(chalk.red("test message 444444"));
// console.log(chalk.bold.red.bgBlue("test message 1112323"));

//console.log(process.argv);
//console.log(yargs.argv);

yargs.command({
    command: 'add',
    describe: 'add new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        //console.log('Adding a new note !!!', argv)
        console.log("Title: " + argv.title);
    }
});

yargs.command({
    command: 'remove',
    describe: 'remove existing note',
    handler: function () {
        console.log('Removed a note !!!')
    }
});

debugger

yargs.parse();
//console.log(yargs.argv);

