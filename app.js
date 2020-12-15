//npm module
const validator = require('validator')
const chalk = require('chalk');
const yargs = require('yargs')
const { demand, demandOption } = require('yargs');
//local
const notes = require("./notes.js");
const { readNote } = require('./notes.js');

//customize yargs 
yargs.version("1.0")

//create add command
yargs.command({

    command: "add",
    describe: "Add a new note",
    builder: {

        title: {

            describe: "Note title",
            demandOption: true,
            type: "string"
        },

        body: {

            describe: "Note body",
            demandOption: true,
            type: "string"

        }

    },
    handler: (argv) => {

notes.addNote(argv.title,argv.body)

    }

})

//create remove command
yargs.command({

command:"remove",
describe:"Remove a note",
builder: {

    title: {

        describe: "Note title",
        demandOption: true,
        type: "String"
    }

},
handler: (argv) => {

    notes.removeNote(argv.title)
   
}

})

//list command
yargs.command({

    command:"list",
    describe:"List notes",
    handler: () => {
    
        notes.listNotes()
    }
    
    })

//read command
yargs.command({

    command:"read",
    describe:"read note",
    builder: {
        title: {

            describe: "Note title",
            demandOption: true,
            type: "String"
        }
    },
    handler: (argv) => {
    
        notes.readNote(argv.title)
    }
    
    })

yargs.parse()